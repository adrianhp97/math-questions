import React, { useState, useEffect, useCallback } from 'react';

/** Utils */
import cx from 'classnames';

/** Store */
import { usePageStore, usePageDispatch, ACTION_TYPE } from './store';

/** Styles */
import * as s from './s.module.scss';

const Toast = () => {
  const { list } = usePageStore();
  const  [currentList, setCurrentList] = useState([]);

  const pageDispatch = usePageDispatch();

  const deleteToast = useCallback((id) => {
    try {
      pageDispatch({
        type: ACTION_TYPE.REMOVE,
        payload: id
      })
    } catch (error) {
      console.log(error)
    }
  }, [pageDispatch])

  useEffect(() => {
    const interval = setInterval(() => {
      if (list.length) deleteToast(list[0].id)
    }, 3000)

    return () => {
      clearInterval(interval)
    }
  }, [list, deleteToast]);

  useEffect(() => {
    setCurrentList([...list])
  }, [list])

  return (
    <div className={cx(s.toastContainer, s.topRight)}>
      {
        currentList.map(toast => (
          <div
            key={`toast-${toast.id}`}
            className={cx(s.notification, s.topRight, toast.type === 'success' ? s.success : s.error)}
          >
            <div>
              <p className={s.notificationMessage}>
                {toast.message}
              </p>
            </div>
          </div>
        ))
      }
    </div>
  )
}

export default Toast;
