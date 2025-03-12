const IS_DEV = process.env.APP_VARIANT === 'development';
const IS_PREVIEW = process.env.APP_VARIANT === 'preview';

const getUniqueIdentifier = () => {
  if (IS_DEV) {
    return 'com.myorg.namedapp.dev';
  }

  if (IS_PREVIEW) {
    return 'com.myorg.namedapp.preview';
  }

  return 'com.myorg.namedapp';
};

const getAppName = () => {
  if (IS_DEV) {
    return 'Named App (Dev)';
  }

  if (IS_PREVIEW) {
    return 'Named App (Preview)';
  }

  return 'Named App';
};



module.exports = ({ config }) => {
  return {
    ...config,
    name: getAppName(),
    ios: {
      ...config.ios,
      bundleIdentifier: getUniqueIdentifier(),
    },
    android: {
      ...config.android,
      package: getUniqueIdentifier(),
    },
  };
};