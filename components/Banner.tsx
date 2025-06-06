import Image from "next/image"
import styles from "./Banner.module.css"

interface BannerImageProps {
  src: string
  alt: string
}

const BannerImage = ({ src, alt }: BannerImageProps) => {
  return (
    <figure className={styles.bannerImage}>
      <Image
        src={src}
        alt={alt}
        fill
        className={styles.bannerImg}
      />
    </figure>
  )
}

export default function Banner() {
  const bannerImages = [
    { src: "/placeholder-4hkw4.png", alt: "Banner 1" },
    { src: "/placeholder-gtn3r.png", alt: "Banner 2" },
    { src: "/placeholder-9hex6.png", alt: "Banner 3" },
    { src: "/placeholder-216uw.png", alt: "Banner 4" },
  ]

  return (
    <section className={styles.bannerContainer} aria-label="Banners">
      {bannerImages.map((image) => (
        <BannerImage
          key={image.src}
          src={image.src}
          alt={image.alt}
        />
      ))}
    </section>
  )
}
