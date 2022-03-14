const { awscdk } = require('projen');
const PROJECT_NAME = 'enterprise-secure-bucket';
const project = new awscdk.AwsCdkConstructLibrary({
  author: 'Yvo van Zee',
  authorAddress: 'yvo@yvovanzee.nl',
  defaultReleaseBranch: 'main',
  name: 'secure_bucket_construct',
  repositoryUrl: 'https://github.com/yvthepief/secure_bucket_construct.git',
  cdkVersion: '2.16.0',
  // For cdk version 2 we use major version 2
  majorVersion: 2,
  defaultReleaseBranch: 'main',
  keywords: [
    'projen',
    's3',
    'secure bucket',
    'enterprise',
    'AWS',
  ],
  vscode: true,
  releaseToNpm: true,
  publishToPypi: {
    distName: 'secure-bucket-construct',
    module: 'secure_bucket_construct',
  },
});
project.synth();