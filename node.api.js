const isProd = stage => stage === 'prod';

let inProd = false;
// eslint-disable-next-line no-unused-vars
const ifProd = (prodCode, devCode) => {
  if (inProd) {
    return prodCode;
  }

  return devCode;
};

export default () => ({
  webpack: (config, { stage }) => {
    inProd = isProd(stage);

    const finalConfig = {
      ...config,
    };

    return finalConfig;
  },
});
