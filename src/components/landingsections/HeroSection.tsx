import React from 'react'
import { ArrowUpRight } from 'lucide-react'
import './HeroSection.css'

const categories = [
  'Event Photography',
  'Commercial Photography',
  'Product Photography',
  'Wedding Photography',
  'Landscape Photography',
  'Branding Photography',
  'Portrait Photo'
]

export default function HeroSection() {
  return (
    <>
      <section className="hero">
        <div className="hero__abstract" aria-hidden="true">
          <span className="hero__ring hero__ring--outer" />
          <span className="hero__ring hero__ring--middle" />
          <span className="hero__ring hero__ring--inner" />
        </div>
        <div className="hero__inner">
          <div className="hero__text">
            <p className="hero__eyebrow">Stunning photography by</p>
            <h1 className="hero__title">Damien Braun</h1>
          </div>
          <div className="hero__cta" role="group" aria-label="Call to action">
            <div className="hero__cta-row">
              {/* <span className="hero__cta-count" aria-hidden="true">
                15+
              </span> */}
              
            </div>
            <p className="hero__cta-title">Let’s <button
                className="hero__cta-button"
                type="button"
                title="Start a project together"
                aria-label="Start a project together"
              >
                
                <ArrowUpRight aria-hidden="true" focusable="false" />
              </button></p> 
              <p className="hero__cta-title">work together</p>
          </div>
        </div>
      </section>

      <section className="hero-categories">
        <div className="hero-categories__list">
          {categories.map((category, index) => (
            <React.Fragment key={category}>
              <span className="hero-categories__item">{category}</span>
              {index < categories.length - 1 && (
                <span className="hero-categories__dot" aria-hidden="true" />
              )}
            </React.Fragment>
          ))}
        </div>
      </section>

      <section className="hero-gallery">
        <div className="hero-gallery__image-wrapper">
          <img
            className="hero-gallery__image"
            src="https://images.unsplash.com/photo-1619546813926-a78fa6372cd2?w=1200&h=800&fit=crop&crop=center"
            alt="Still life photograph of a red apple with dramatic lighting"
            loading="lazy"
          />
        </div>
      </section>
    </>
  )
}
