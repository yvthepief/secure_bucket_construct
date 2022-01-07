const { awscdk } = require('projen');
const project = new awscdk.AwsCdkConstructLibrary({
  author: 'Yvo van Zee',
  authorAddress: 'yvo@yvovanzee.nl',
  defaultReleaseBranch: 'main',
  name: 'secure_bucket_construct',
  repositoryUrl: 'https://github.com/yvthepief/secure_bucket_construct.git',
  cdkVersion: '2.4.0',
  // For cdk version 2 we use major version 2
  majorVersion: 2,
  defaultReleaseBranch: 'main',
  keywords: [
    'projen',
    's3',
    'secure bucket',
    'enterprise',
  ],
  packageName: 'enterprise-secure-bucket',
  vscode: true,
  releaseToNpm: true,
});
project.synth();