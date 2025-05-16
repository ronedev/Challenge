import Image from "next/image"

export default function Banner() {
  return (
    <div
      style={{
        width: "100%",
        height: "200px",
        backgroundColor: "#f5f5f5",
        marginTop: "10px",
        marginBottom: "30px",
        overflow: "hidden",
        whiteSpace: "nowrap",
      }}
    >
      <div
        style={{
          display: "inline-block",
          width: "300px",
          height: "180px",
          margin: "10px 5px 10px 10px",
          position: "relative",
        }}
      >
        <Image
          src="/placeholder-4hkw4.png"
          alt="Banner 1"
          width={300}
          height={180}
          style={{ borderRadius: "8px" }}
        />
      </div>

      <div
        style={{
          display: "inline-block",
          width: "300px",
          height: "180px",
          margin: "10px 5px",
          position: "relative",
        }}
      >
        <Image
          src="/placeholder-gtn3r.png"
          alt="Banner 2"
          width={300}
          height={180}
          style={{ borderRadius: "8px" }}
        />
      </div>

      <div
        style={{
          display: "inline-block",
          width: "300px",
          height: "180px",
          margin: "10px 5px",
          position: "relative",
        }}
      >
        <Image
          src="/placeholder-9hex6.png"
          alt="Banner 3"
          width={300}
          height={180}
          style={{ borderRadius: "8px" }}
        />
      </div>

      <div
        style={{
          display: "inline-block",
          width: "300px",
          height: "180px",
          margin: "10px 10px 10px 5px",
          position: "relative",
        }}
      >
        <Image
          src="/placeholder-216uw.png"
          alt="Banner 4"
          width={300}
          height={180}
          style={{ borderRadius: "8px" }}
        />
      </div>
    </div>
  )
}
