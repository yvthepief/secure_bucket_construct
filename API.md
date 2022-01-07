# API Reference <a name="API Reference" id="api-reference"></a>

## Constructs <a name="Constructs" id="constructs"></a>

### SecureBucket <a name="enterprise-secure-bucket.SecureBucket" id="enterprisesecurebucketsecurebucket"></a>

#### Initializers <a name="enterprise-secure-bucket.SecureBucket.Initializer" id="enterprisesecurebucketsecurebucketinitializer"></a>

```typescript
import { SecureBucket } from 'enterprise-secure-bucket'

new SecureBucket(scope: Construct, id: string, props?: BucketProps)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| [`scope`](#enterprisesecurebucketsecurebucketparameterscope)<span title="Required">*</span> | [`constructs.Construct`](#constructs.Construct) | *No description.* |
| [`id`](#enterprisesecurebucketsecurebucketparameterid)<span title="Required">*</span> | `string` | *No description.* |
| [`props`](#enterprisesecurebucketsecurebucketparameterprops) | [`aws-cdk-lib.aws_s3.BucketProps`](#aws-cdk-lib.aws_s3.BucketProps) | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="enterprise-secure-bucket.SecureBucket.parameter.scope" id="enterprisesecurebucketsecurebucketparameterscope"></a>

- *Type:* [`constructs.Construct`](#constructs.Construct)

---

##### `id`<sup>Required</sup> <a name="enterprise-secure-bucket.SecureBucket.parameter.id" id="enterprisesecurebucketsecurebucketparameterid"></a>

- *Type:* `string`

---

##### `props`<sup>Optional</sup> <a name="enterprise-secure-bucket.SecureBucket.parameter.props" id="enterprisesecurebucketsecurebucketparameterprops"></a>

- *Type:* [`aws-cdk-lib.aws_s3.BucketProps`](#aws-cdk-lib.aws_s3.BucketProps)

---



#### Properties <a name="Properties" id="properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| [`bucket`](#enterprisesecurebucketsecurebucketpropertybucket)<span title="Required">*</span> | [`aws-cdk-lib.aws_s3.Bucket`](#aws-cdk-lib.aws_s3.Bucket) | *No description.* |

---

##### `bucket`<sup>Required</sup> <a name="enterprise-secure-bucket.SecureBucket.property.bucket" id="enterprisesecurebucketsecurebucketpropertybucket"></a>

```typescript
public readonly bucket: Bucket;
```

- *Type:* [`aws-cdk-lib.aws_s3.Bucket`](#aws-cdk-lib.aws_s3.Bucket)

---





