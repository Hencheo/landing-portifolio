"use client"

import { useEffect, useMemo, useState } from "react"
import dynamic from 'next/dynamic'
import {
  Cloud,
  fetchSimpleIcons,
  ICloud,
  renderSimpleIcon,
  SimpleIcon,
} from "react-icon-cloud"

export const cloudProps: Omit<ICloud, "children"> = {
  containerProps: {
    style: {
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      width: "100%",
      height: "450px",
      paddingTop: 20,
      paddingBottom: 20,
    },
  },
  options: {
    reverse: true,
    depth: 1,
    wheelZoom: false,
    imageScale: 2,
    activeCursor: "default",
    tooltip: "native",
    initial: [0.1, -0.1],
    clickToFront: 500,
    tooltipDelay: 0,
    outlineColour: "#0000",
    maxSpeed: 0.04,
    minSpeed: 0.02,
  },
}

// Componente com renderização exclusiva no cliente
const DynamicCloud = dynamic(() => Promise.resolve(({ children, ...props }: ICloud) => {
  return <Cloud {...props}>{children}</Cloud>
}), { ssr: false })

export const renderCustomIcon = (icon: SimpleIcon) => {
  return renderSimpleIcon({
    icon,
    bgHex: "#060606",
    fallbackHex: "#3b82f6",
    minContrastRatio: 2,
    size: 42,
    aProps: {
      href: undefined,
      target: undefined,
      rel: undefined,
      onClick: (e: any) => e.preventDefault(),
    },
  })
}

export type HabilidadeIconCloudProps = {
  iconSlugs: string[]
  categoria?: string
}

type IconData = Awaited<ReturnType<typeof fetchSimpleIcons>>

export function HabilidadeIconCloud({ iconSlugs, categoria }: HabilidadeIconCloudProps) {
  const [data, setData] = useState<IconData | null>(null)
  const [isClient, setIsClient] = useState(false)

  useEffect(() => {
    setIsClient(true)
    fetchSimpleIcons({ slugs: iconSlugs }).then(setData)
  }, [iconSlugs])

  const renderedIcons = useMemo(() => {
    if (!data) return null

    return Object.values(data.simpleIcons).map((icon) =>
      renderCustomIcon(icon),
    )
  }, [data])

  // Renderize um placeholder quando estiver no servidor ou carregando no cliente
  if (!isClient || !data) {
    return (
      <div className="relative">
        {categoria && categoria !== 'todas' && (
          <div className="absolute top-0 left-0 w-full text-center text-2xl font-bold text-blue-500 z-10">
            {categoria === 'frontend' ? 'Frontend' :
             categoria === 'backend' ? 'Backend' :
             'Data Science & Outros'}
          </div>
        )}
        <div className="flex justify-center items-center w-full h-[450px]">
          <p className="text-neutral-400">Carregando ícones...</p>
        </div>
      </div>
    )
  }

  return (
    <div className="relative">
      {categoria && categoria !== 'todas' && (
        <div className="absolute top-0 left-0 w-full text-center text-2xl font-bold text-blue-500 z-10">
          {categoria === 'frontend' ? 'Frontend' :
           categoria === 'backend' ? 'Backend' :
           'Data Science & Outros'}
        </div>
      )}
      <DynamicCloud {...cloudProps as ICloud}>
        <>{renderedIcons}</>
      </DynamicCloud>
    </div>
  )
}
