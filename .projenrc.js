const { awscdk } = require('projen');
const project = new awscdk.AwsCdkConstructLibrary({
  author: 'Yvo van Zee',
  authorAddress: 'yvo@yvovanzee.nl',
  defaultReleaseBranch: 'main',
  name: 'secure_bucket_construct',
  repositoryUrl: 'https://github.com/yvthepief/secure_bucket_construct.git',
  cdkVersion: '2.4.0',
  peerDependencies: [
    'aws-cdk-lib',
    'constructs',
  ],
  packageName: 'enterprise_secure_bucket',
});
project.synth();