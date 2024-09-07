'use client'
import React, {useEffect} from 'react'

export default function Slider() {
  useEffect(() => {
    var testim = document.getElementById('testim'),
      testimDots = Array.prototype.slice.call(
        document.getElementById('testim-dots').children
      ),
      testimContent = Array.prototype.slice.call(
        document.getElementById('testim-content').children
      ),
      testimLeftArrow = document.getElementById('left-arrow'),
      testimRightArrow = document.getElementById('right-arrow'),
      testimSpeed = 4500,
      currentSlide = 0,
      currentActive = 0,
      testimTimer,
      touchStartPos,
      touchEndPos,
      touchPosDiff,
      ignoreTouch = 30
    window.onload = function () {
      // Testim Script
      function playSlide(slide) {
        for (var k = 0; k < testimDots.length; k++) {
          testimContent[k].classList.remove('active')
          testimContent[k].classList.remove('inactive')
          testimDots[k].classList.remove('active')
        }

        if (slide < 0) {
          slide = currentSlide = testimContent.length - 1
        }

        if (slide > testimContent.length - 1) {
          slide = currentSlide = 0
        }

        if (currentActive != currentSlide) {
          testimContent[currentActive].classList.add('inactive')
        }
        testimContent[slide].classList.add('active')
        testimDots[slide].classList.add('active')

        currentActive = currentSlide

        clearTimeout(testimTimer)
        testimTimer = setTimeout(function () {
          playSlide((currentSlide += 1))
        }, testimSpeed)
      }

      testimLeftArrow.addEventListener('click', function () {
        playSlide((currentSlide -= 1))
      })

      testimRightArrow.addEventListener('click', function () {
        playSlide((currentSlide += 1))
      })

      for (var l = 0; l < testimDots.length; l++) {
        testimDots[l].addEventListener('click', function () {
          playSlide((currentSlide = testimDots.indexOf(this)))
        })
      }

      playSlide(currentSlide)

      // keyboard shortcuts
      document.addEventListener('keyup', function (e) {
        switch (e.keyCode) {
          case 37:
            testimLeftArrow.click()
            break

          case 39:
            testimRightArrow.click()
            break

          case 39:
            testimRightArrow.click()
            break

          default:
            break
        }
      })

      testim.addEventListener('touchstart', function (e) {
        touchStartPos = e.changedTouches[0].clientX
      })

      testim.addEventListener('touchend', function (e) {
        touchEndPos = e.changedTouches[0].clientX

        touchPosDiff = touchStartPos - touchEndPos

        console.log(touchPosDiff)
        console.log(touchStartPos)
        console.log(touchEndPos)

        if (touchPosDiff > 0 + ignoreTouch) {
          testimLeftArrow.click()
        } else if (touchPosDiff < 0 - ignoreTouch) {
          testimRightArrow.click()
        } else {
          return
        }
      })
    }
  }, [])

  return (
    <div className='container partners'>
      <h1 className='w3-center'>What Our Client Says</h1>
      <section id='testim' className='testim bg-[#f9fafc]'>
        <div className='testim-cover '>
          <div className='wrap rounded-[12px]'>
            <span
              id='right-arrow'
              className='arrow right fa fa-chevron-right'
            />
            <span id='left-arrow' className='arrow left fa fa-chevron-left ' />
            <ul id='testim-dots' className='dots'>
              <li className='dot active' />
              {/*
               */}
              <li className='dot' />
              {/*
               */}
              <li className='dot' />
              {/*
               */}
              <li className='dot' />
              {/*
               */}
              <li className='dot' />
            </ul>
            <div id='testim-content' className='cont'>
              <div className='active'>
                <div className='img'>
                  <img
                    src='https://in.bmscdn.com/iedb/artist/images/website/poster/large/kartik-aaryan-1045198-08-12-2017-06-34-11.jpg'
                    alt
                  />
                </div>
                <h2>Lorem P. Ipsum</h2>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco.
                </p>
              </div>
              <div>
                <div className='img'>
                  <img
                    src='https://timesofindia.indiatimes.com/thumb/msid-75752690,width-800,height-600,resizemode-4/75752690.jpg'
                    alt
                  />
                </div>
                <h2>Mr. Lorem Ipsum</h2>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco.
                </p>
              </div>
              <div>
                <div className='img'>
                  <img
                    src='https://in.bmscdn.com/iedb/artist/images/website/poster/large/kartik-aaryan-1045198-08-12-2017-06-34-11.jpg'
                    alt
                  />
                </div>
                <h2>Lorem Ipsum</h2>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco.
                </p>
              </div>
              <div>
                <div className='img'>
                  <img
                    src='https://p16-sg-default.akamaized.net/aweme/1080x1080/tiktok-obj/1666413671597057.jpeg'
                    alt
                  />
                </div>
                <h2>Lorem De Ipsum</h2>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco.
                </p>
              </div>
              <div>
                <div className='img'>
                  <img
                    src='https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSKLJe1Lrz2N3ufVSwQokSJ79jGBbIptXuVnsdxMmNUlE14ohwp&usqp=CAU'
                    alt
                  />
                </div>
                <h2>Ms. Lorem R. Ipsum</h2>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
