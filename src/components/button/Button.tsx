import React, {ButtonHTMLAttributes, DetailedHTMLProps} from 'react'

import style from './Button.module.css'

type DefaultButtonPropsType = DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>,
  HTMLButtonElement>

type ButtonPropsType = DefaultButtonPropsType & {
  className?: string
  loading?: boolean
  colorType?: 'danger' | 'success' | 'warning' | 'primary'
  size?: 'min' | 'medium' | 'large'
  block?: boolean
  outlined?: boolean
  text?: boolean
}

export const Button: React.FC<ButtonPropsType> = ({
                                                    className,
                                                    loading,
                                                    colorType,
                                                    size,
                                                    block,
                                                    outlined,
                                                    text,
                                                    children,
                                                    ...restProps
                                                  }) => {

  let finalClassName = `${style.button} ${className} `
  finalClassName += loading ? `${style.loading} ` : ''
  finalClassName += block ? `${style.block} ` : ''
  finalClassName += colorType ? `${style[colorType]} ` : `${style.primary} `
  finalClassName += size ? `${style[size]} ` : `${style.medium} `
  finalClassName += outlined ? `${style.outlined} ` : ''
  finalClassName += text ? `${style.text} ` : ''

  return (
    <button className={finalClassName} {...restProps}>
      {children}
      <span className={style.spinner}>
        <svg width="65px" height="65px" viewBox="0 0 66 66" xmlns="http://www.w3.org/2000/svg">
        <circle className={style.path} fill="none" cx="33" cy="33" r="30"></circle>
      </svg>
      </span>
    </button>
  )
}
