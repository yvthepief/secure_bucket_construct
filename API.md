# API Reference <a name="API Reference" id="api-reference"></a>

## Constructs <a name="Constructs" id="constructs"></a>

### SecureBucket <a name="secure_bucket_construct.SecureBucket" id="securebucketconstructsecurebucket"></a>

#### Initializers <a name="secure_bucket_construct.SecureBucket.Initializer" id="securebucketconstructsecurebucketinitializer"></a>

```typescript
import { SecureBucket } from 'secure_bucket_construct'

new SecureBucket(scope: Construct, id: string, props?: BucketProps)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| [`scope`](#securebucketconstructsecurebucketparameterscope)<span title="Required">*</span> | [`constructs.Construct`](#constructs.Construct) | *No description.* |
| [`id`](#securebucketconstructsecurebucketparameterid)<span title="Required">*</span> | `string` | *No description.* |
| [`props`](#securebucketconstructsecurebucketparameterprops) | [`aws-cdk-lib.aws_s3.BucketProps`](#aws-cdk-lib.aws_s3.BucketProps) | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="secure_bucket_construct.SecureBucket.parameter.scope" id="securebucketconstructsecurebucketparameterscope"></a>

- *Type:* [`constructs.Construct`](#constructs.Construct)

---

##### `id`<sup>Required</sup> <a name="secure_bucket_construct.SecureBucket.parameter.id" id="securebucketconstructsecurebucketparameterid"></a>

- *Type:* `string`

---

##### `props`<sup>Optional</sup> <a name="secure_bucket_construct.SecureBucket.parameter.props" id="securebucketconstructsecurebucketparameterprops"></a>

- *Type:* [`aws-cdk-lib.aws_s3.BucketProps`](#aws-cdk-lib.aws_s3.BucketProps)

---



#### Properties <a name="Properties" id="properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| [`bucket`](#securebucketconstructsecurebucketpropertybucket)<span title="Required">*</span> | [`aws-cdk-lib.aws_s3.Bucket`](#aws-cdk-lib.aws_s3.Bucket) | *No description.* |

---

##### `bucket`<sup>Required</sup> <a name="secure_bucket_construct.SecureBucket.property.bucket" id="securebucketconstructsecurebucketpropertybucket"></a>

```typescript
public readonly bucket: Bucket;
```

- *Type:* [`aws-cdk-lib.aws_s3.Bucket`](#aws-cdk-lib.aws_s3.Bucket)

---





