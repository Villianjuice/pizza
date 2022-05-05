import React from 'react'
import ContentLoader from 'react-content-loader';

const BlockLoaded = () => {
  return (
    <ContentLoader className='pizza-block'
      speed={2}
      width={280}
      height={460}
      viewBox="0 0 280 460"
      backgroundColor="#ebeaea"
      foregroundColor="#f7f7f7">
      <circle cx="125" cy="125" r="125" />
      <rect x="0" y="260" rx="8" ry="8" width="280" height="24" />
      <rect x="102" y="338" rx="0" ry="0" width="0" height="1" />
      <rect x="0" y="305" rx="10" ry="10" width="280" height="85" />
      <rect x="128" y="415" rx="30" ry="30" width="151" height="44" />
      <rect x="-1" y="424" rx="13" ry="13" width="89" height="27" />
    </ContentLoader>
  );
}

export default BlockLoaded