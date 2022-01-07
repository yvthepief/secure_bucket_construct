// Import necessary packages
import { Key } from 'aws-cdk-lib/aws-kms';
import { BlockPublicAccess, Bucket, BucketAccessControl, BucketEncryption, BucketProps } from 'aws-cdk-lib/aws-s3';
import { Construct } from 'constructs';

export class SecureBucket extends Construct {
  public bucket: Bucket;

  // Optional allow pass of bucket props
  constructor(scope: Construct, id: string, props?: BucketProps) {
    super(scope, id);

    // Overrule Bucket Props with secure defaults and make them mandatory
    let newProps: BucketProps = {
      ...props,
      // Force encryption to use a Custom Managed Key
      encryption: props && props.encryption && props.encryption != BucketEncryption.UNENCRYPTED
        ? props.encryption
        : BucketEncryption.KMS,
      // Create the Encryption Key, with Rotation enabled
      encryptionKey: new Key(this, `${id}-key`, { enableKeyRotation: true }),
      blockPublicAccess: BlockPublicAccess.BLOCK_ALL,
      versioned: true,
      enforceSSL: true,
      accessControl: BucketAccessControl.LOG_DELIVERY_WRITE,
      serverAccessLogsPrefix: 'access-logs',
    };

    // Create actual bucket
    this.bucket = new Bucket(this, `${id}-bucket`, newProps);
  }
}