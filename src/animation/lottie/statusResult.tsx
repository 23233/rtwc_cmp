import React, {CSSProperties, useEffect, useRef} from 'react';
import {Player} from '@lottiefiles/react-lottie-player';

export interface StatusCmpParams {
  uri: string;
  title: string | React.ReactElement;
  text?: string | React.ReactElement;
  className?: string;
  style?: CSSProperties;
  children?: React.ReactNode;
}

const StatusResult: React.FC<StatusCmpParams> = ({
                                                   uri,
                                                   title,
                                                   className,
                                                   style = {},
                                                   children,
                                                   text,
                                                 }) => {
  const playerRef = useRef<any>();

  const running = () => {
    playerRef.current?.play();
  };


  useEffect(() => {
    return () => {
      playerRef.current?.stop();
    };
  }, []);

  return (
    <React.Fragment>
      <div className={`text-center py-4 ${className || ''}`}>
        <div className={'flex justify-center items-center'}>
          <Player
            autoplay={false}
            loop
            src={uri}
            style={{height: 240, width: 240, ...style}}
            ref={playerRef}
            onEvent={(event) => {
              if (event === 'load') running();
            }}
          />
        </div>
        <div className={'text-3xl mt-2'}>{title}</div>
        <div className="text-lg text-gray-400 mt-2">{text}</div>
        {children}
      </div>
    </React.Fragment>
  );
};
export default StatusResult;
