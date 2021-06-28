//uncommit below line to activate api
// import { apiConfig } from './Utils';
// import Secrets from 'react-native-config';
import { rawData } from './rawData';
import { rawComments } from './rawComments';

//uncommit below line to activate api
// const api = apiConfig(Secrets.API_FAKE_URL);

const findOnePost = id => {
  const found = rawData.filter(data => data.id === id);
  return {
    status: 200,
    data: found
  };
};

const userPost = () => {
  const getAllPost = () => {
    return {
      status: 200,
      data: rawData
    };
  };

  const getSinglePost = id => {
    return findOnePost(id);
  };

  const getAllComments = () => {
    return {
      status: 200,
      data: rawComments
    };
  };
  return { getAllPost, getSinglePost, getAllComments };
};

export default {
  userPost
};
