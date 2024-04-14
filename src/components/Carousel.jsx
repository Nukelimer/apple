import React, { useEffect, useRef, useState } from "react";
import { highlightsSlides } from "../constants";
import { pauseImg, playImg, replayImg } from "../utils";
import { useGSAP } from "@gsap/react";
import { gsap, ScrollTrigger } from "gsap/all";
gsap.registerPlugin(ScrollTrigger);
function Carousel() {
  const videoRef = useRef([]);
  const videoSpanRef = useRef([]);
  const videoDivRef = useRef([]);
  const [loadedData, setLoadedData] = useState([]);
  const [video, setVideo] = useState({
    isEnd: false,
    isLastVideo: false,
    startPlay: false,
    videoId: 0,
    isPlaying: false,
  });

  const { isEnd, isLastVideo, startPlay, videoId, isPlaying } = video;

  useGSAP(() => {
    gsap.to("#slider", {
      transform: `translateX(${-100 * videoId}%)`,
      duration: 1.2,
      ease: "power1.inOut",
    });
    gsap.to("video", {
      scrollTrigger: {
        trigger: "#video",
        toggleActions: "restart none none none",
      },
      onComplete: () => {
        setVideo((previousVideo) => {
          return {
            ...previousVideo,
            startPlay: true,
            isPlaying: true,
          };
        });
      },
    });
  }, [isEnd, videoId]);

  const handleLoadedMetadata = (event, i) => {
    setLoadedData((previousData) => [...previousData, event]);
  };

  useEffect(() => {
    if (loadedData.length > 3) {
      if (!isPlaying) {
        videoRef.current[videoId].pause();
      } else {
        startPlay && videoRef.current[videoId].play();
      }
    }
  }, [startPlay, videoId, isPlaying, loadedData]);

  useEffect(() => {
    let currentProgress = 0;
    let span = videoSpanRef.current;
    if (span[videoId]) {
      let anim = gsap.to(span[videoId], {
        onUpdate: () => {
          const progress = Math.ceil(anim.progress() * 100);

          if (progress != currentProgress) {
            currentProgress = progress;

            gsap.to(videoDivRef.current[videoId], {
              width:
                window.innerWidth < 760
                  ? "10vw"
                  : window.innerWidth < 1200
                  ? "10vw"
                  : "4vw",
            });

            gsap.to(span[videoId], {
              width: `${currentProgress}%`,
              background: "gray",
            });
          }
        },

        onComplete: () => {
          if (isPlaying) {
            gsap.to(videoDivRef.current[videoId], {
              width: "15px",
            });

            gsap.to(span[videoId], {
              backgroundColor: "#afafaf",
            });
          }
        },
      });

      if (videoId == 0) {
        anim.restart();
      }
      const animUpdate = () => {
        anim.progress(
          videoRef.current[videoId].currentTime /
            highlightsSlides[videoId].videoDuration
        );
      };

      if (isPlaying) {
        gsap.ticker.add(animUpdate);
      } else {
        gsap.ticker.remove(animUpdate);
      }
    }
  }, [videoId, startPlay]);

  function processHandler(videoStates, i) {
    switch (videoStates) {
      case "video-end":
        setVideo((previousVideo) => ({
          ...previousVideo,
          isEnd: true,
          videoId: i + 1,
        }));
        break;

      case "video-last":
        setVideo((previousVideo) => ({
          ...previousVideo,
          isLastVideo: true,
        }));
        break;

      case "video-reset":
        setVideo((previousVideo) => ({
          ...previousVideo,
          isLastVideo: false,
          videoId: 0,
        }));
        break;

      case "play":
        setVideo((previousVideo) => ({
          ...previousVideo,
          isPlaying: !previousVideo.isPlaying,
        }));
        break;

      case "pause":
        setVideo((previousVideo) => ({
          ...previousVideo,
          isPlaying: !previousVideo.isPlaying,
        }));
        break;

      default:
        return video;
    }
  }
  return (
    <>
      <div className="flex mt-6 items-center">
        {highlightsSlides.map((highlight, i) => {
          return (
            <div key={highlight.id} id="slider" className="sm:pr-20 pr-10">
              <div className="video-carousel_container ">
                <div className="w-full h-full flex-center rounded-3xl overflow-hidden bg-black">
                  <video
                    id="video"
                    muted
                    playsInline={true}
                    ref={(el) => {
                      return (videoRef.current[i] = el);
                    }}
                    className={`${
                      highlight.id === 2 && "translate-x-44"
                    } pointer-events-none`}
                    onPlay={() => {
                      setVideo((prevVideo) => ({
                        ...prevVideo,
                        isPlaying: true,
                      }));
                    }}
                    onEnded={() => {
                      i !== 3
                        ? processHandler("video-end", i)
                        : processHandler("video-last");
                    }}
                    preload="auto"
                    onLoadedMetadata={(event) =>
                      handleLoadedMetadata(i, event)
                    }>
                    <source src={highlight.video} type="video/mp4" />
                  </video>
                </div>

                <div className="absolute top-12 left-[5%] z-5">
                  {highlight.textLists.map((description) => {
                    return (
                      <p
                        key={description}
                        className="md:text-2xl text-xl font-medium">
                        {description}
                      </p>
                    );
                  })}
                </div>
              </div>
            </div>
          );
        })}
      </div>

      <div className="relative flex-center mt-10">
        <div className="flex-center py-5 px-7 bg-gray-700 backdrop-blur rounded-full">
          {videoRef.current?.map((_, i) => (
            <span
              key={i}
              ref={(el) => {
                return (videoDivRef.current[i] = el);
              }}
              className="mx-2 w-3 h-3 bg-gray-200 rounded-full relative  cursor-pointer hover:bg-slate-500">
              <span
                className="h-full w-full absolute rounded-full"
                ref={(el) => {
                  return (videoSpanRef.current[i] = el);
                }}
              />
            </span>
          ))}
        </div>
        <button
          className="control-btn"
          onClick={
            isLastVideo
              ? () => {
                  processHandler("video-reset");
                }
              : isPlaying
              ? () => {
                  processHandler("play");
                }
              : () => {
                  processHandler("pause");
                }
          }>
          <img src={isLastVideo ? replayImg : isPlaying ? pauseImg : playImg} />
        </button>
      </div>
    </>
  );
}

export default Carousel;
