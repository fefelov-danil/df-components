import React, {FC, useEffect, useRef, useState} from 'react';
import style from './DropDown.module.css'

type DropDownPropsType = {
  openPopupChildren: React.ReactNode
  children: React.ReactNode
}

export const DropDown: FC<DropDownPropsType> = ({children, openPopupChildren}) => {
  const [openPopup, setOpenPopup] = useState(false)
  const dropDown = useRef(null as HTMLDivElement | null)

  useEffect(() => {
    if (!openPopup) return

    const handleClick = (e: any) => {
      if (!dropDown.current) return
      if (!dropDown.current.contains(e.target)) {
        setOpenPopup(false)
      }
    }

    document.addEventListener('click', handleClick)

    return () => {
      document.removeEventListener('click', handleClick)
    }
  }, [openPopup])

  return (
    <div className={style.dropDown}>
      <div ref={dropDown} onClick={() => setOpenPopup(!openPopup)} className={style.actionForOpen}>
        {openPopupChildren}
      </div>
      <div className={
        openPopup
          ? `${style.actionsPopUp} ${style.actionsIsOpened}`
          : `${style.actionsPopUp} ${style.actionsIsClosed}`
      }>
        {children}
      </div>
    </div>
  );
};