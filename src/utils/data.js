export const categories = [
  {
    name: 'fitness',
    image: 'https://www.markham.ca/wps/wcm/connect/markham/a8337771-9ff7-45a6-92d2-95660fe896f0/Recreation+fitness+Icon.png?MOD=AJPERES&CACHEID=ROOTWORKSPACE.Z18_2QD4H901OGV160QC8BLCRJ1001-a8337771-9ff7-45a6-92d2-95660fe896f0-nXFaeni',
  },
  {
    name: 'cars',
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRlpoarsVitTOLbdIr5VJEGzXWKvlBAMvbjuxjX8CyzAbyAKaVjD7U-p8IJqEpF9tHstj4&usqp=CAU',
  },
  {
    name: 'wallpaper',
    image: 'https://wallpaperforu.com/wp-content/uploads/2020/07/neon-wallpaper-20070214114248800x1280.jpg',
  },
  {
    name: 'gaming',
    image: 'https://www.teknikmagasinet.se/storage/ma/a8d07aced31b415f84a5d651ca67967a/869811859b094e2aad7116431ca250b1/jpg/56F298CBEBA3ECBD15C314CA12FA06F1DF5EFD3B/112030_4.jpg',
  },
  {
    name: 'photo',
    image: 'https://media.istockphoto.com/photos/trees-forming-a-heart-picture-id537373196?k=20&m=537373196&s=612x612&w=0&h=Y6zpQNFrhLp9lusVP5xbJ8s6H9i0hOZlQwhhPxHlGXU=',
  },
  {
    name: 'food',
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRpUuSKIbKRYBPgbDkM5tNXpiDUAZ86gJiPSw&usqp=CAU',
  },
  {
    name: 'nature',
    image: 'https://i.pinimg.com/236x/b9/82/d4/b982d49a1edd984c4faef745fd1f8479.jpg',
  },
  {
    name: 'art',
    image: 'https://i.pinimg.com/736x/f4/e5/ba/f4e5ba22311039662dd253be33bf5f0e.jpg',
  }, {
    name: 'travel',
    image: 'https://i.pinimg.com/236x/fa/95/98/fa95986f2c408098531ca7cc78aee3a4.jpg',
  },
  {
    name: 'movies',
    image: 'http://news.doddleme.com/wp-content/uploads/2012/09/FOX-LOGO-JPEG.jpg',
  }, {
    name: 'cats',
    image: 'https://media.wired.co.uk/photos/60c8730fa81eb7f50b44037e/3:2/w_3329,h_2219,c_limit/1521-WIRED-Cat.jpeg',
  }, {
    name: 'dogs',
    image: 'https://post.medicalnewstoday.com/wp-content/uploads/sites/3/2020/02/322868_1100-800x825.jpg',
  },
  {
    name: 'others',
    image: 'https://i.pinimg.com/236x/2e/63/c8/2e63c82dfd49aca8dccf9de3f57e8588.jpg',
  },
];

export const feedQuery = `*[_type == "pin"] | order(_createdAt desc) {
  image{
    asset->{
      url
    }
  },
      _id,
      destination,
      postedBy->{
        _id,
        userName,
        image
      },
      save[]{
        _key,
        postedBy->{
          _id,
          userName,
          image
        },
      },
    } `;

export const pinDetailQuery = (pinId) => {
  const query = `*[_type == "pin" && _id == '${pinId}']{
    image{
      asset->{
        url
      }
    },
    _id,
    title, 
    about,
    category,
    destination,
    postedBy->{
      _id,
      userName,
      image
    },
   save[]{
      postedBy->{
        _id,
        userName,
        image
      },
    },
    comments[]{
      comment,
      _key,
      postedBy->{
        _id,
        userName,
        image
      },
    }
  }`;
  return query;
};

export const pinDetailMorePinQuery = (pin) => {
  const query = `*[_type == "pin" && category == '${pin.category}' && _id != '${pin._id}' ]{
    image{
      asset->{
        url
      }
    },
    _id,
    destination,
    postedBy->{
      _id,
      userName,
      image
    },
    save[]{
      _key,
      postedBy->{
        _id,
        userName,
        image
      },
    },
  }`;
  return query;
};

export const searchQuery = (searchTerm) => {
  const query = `*[_type == "pin" && title match '${searchTerm}*' || category match '${searchTerm}*' || about match '${searchTerm}*']{
        image{
          asset->{
            url
          }
        },
            _id,
            destination,
            postedBy->{
              _id,
              userName,
              image
            },
            save[]{
              _key,
              postedBy->{
                _id,
                userName,
                image
              },
            },
          }`;
  return query;
};

export const userQuery = (userId) => {
  const query = `*[_type == "user" && _id == '${userId}']`;
  return query;
};

export const userCreatedPinsQuery = (userId) => {
  const query = `*[ _type == 'pin' && userId == '${userId}'] | order(_createdAt desc){
    image{
      asset->{
        url
      }
    },
    _id,
    destination,
    postedBy->{
      _id,
      userName,
      image
    },
    save[]{
      postedBy->{
        _id,
        userName,
        image
      },
    },
  }`;
  return query;
};

export const userSavedPinsQuery = (userId) => {
  const query = `*[_type == 'pin' && '${userId}' in save[].userId ] | order(_createdAt desc) {
    image{
      asset->{
        url
      }
    },
    _id,
    destination,
    postedBy->{
      _id,
      userName,
      image
    },
    save[]{
      postedBy->{
        _id,
        userName,
        image
      },
    },
  }`;
  return query;
};