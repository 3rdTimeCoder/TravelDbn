import {useEffect} from 'react'

const Slider = ({numOfImgs, imgPointer, setImgPointer }) => {
  const startSlider = (lastIndex, pointer, setPointer, seconds) => {
    let s = setInterval(() => {
      if (pointer > lastIndex) {
        return;
      } else {
        setPointer(pointer++);
      }
      console.log("lastIndex", lastIndex);
      console.log("pointer", pointer);
    }, seconds);
    return s;
  };
  useEffect(() => {
    let bSlide = null;
    if (imgPointer <= numOfImgs) {
      bSlide = startSlider(
        numOfImgs,
        imgPointer,
        setImgPointer,
        3000
      );
    }
    if (imgPointer >= numOfImgs) {
      setImgPointer(0);
    }

    return ()=>{
      clearInterval(bSlide)
    }
  }, [numOfImgs, imgPointer, setImgPointer]);
}

export default Slider