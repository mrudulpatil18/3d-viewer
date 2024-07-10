import { useEffect, useState } from "react"
import { useGlobalObjLoader } from "src/hooks/use-global-obj-loader"
import { Euler, Vector3 } from "three"
import { MTLLoader, OBJLoader } from "three-stdlib"

export function MixedStlModel({
  url,
  position,
  rotation,
}: {
  url: string
  position?: Vector3 | [number, number, number]
  rotation?: Euler | [number, number, number]
}) {
  // const group = useLoader(OBJLoader, url)
  // const materials = useLoader(MTLLoader, url)
  // const obj = useLoader(OBJLoader, url)

  // const [obj, setObj] = useState<any | null>(null)
  // useEffect(() => {
  //   if (!url) return
  //   async function loadUrlContent() {
  //     const response = await fetch(url)
  //     const text = await response.text()

  //     // Extract all the sections of the file that have newmtl...endmtl to
  //     // separate into mtlContent and objContent

  //     const mtlContent = text
  //       .match(/newmtl[\s\S]*?endmtl/g)
  //       ?.join("\n")!
  //       .replace(/d 0\./g, "d 1.")!
  //     const objContent = text.replace(/newmtl[\s\S]*?endmtl/g, "")

  //     const mtlLoader = new MTLLoader()
  //     mtlLoader.setMaterialOptions({
  //       invertTrProperty: true,
  //     })
  //     const materials = mtlLoader.parse(
  //       // Grayscale the colors, for some reason everything from JLCPCB is
  //       // a bit red, it doesn't look right. The grayscale version looks OK,
  //       // it's a HACK because we only take the second color rather than
  //       // averaging the colors
  //       mtlContent.replace(
  //         /Kd\s+([\d.]+)\s+([\d.]+)\s+([\d.]+)/g,
  //         "Kd $2 $2 $2"
  //       ),
  //       "test.mtl"
  //     )

  //     const objLoader = new OBJLoader()
  //     objLoader.setMaterials(materials)
  //     setObj(objLoader.parse(objContent))
  //   }
  //   loadUrlContent().catch((e) => {
  //     console.log("Failed to load model for url: ", url)
  //     console.error(e)
  //   })
  // }, [url])
  const obj = useGlobalObjLoader(url)

  return (
    <group
      rotation={rotation}
      position={position}
      key={Boolean(obj).toString()}
    >
      {obj && <primitive object={obj} />}
    </group>
  )
}
