import {useState} from "react";
import React from 'react';
import {notification} from "antd";


const MyNotification = React.forwardRef((props, ref) => {
    const [api, contextHolder] = notification.useNotification();
    const [noticeMsg,setNoticeMsg]=useState({type:'',description:''});
    const childMethod = (params) => {
        if(noticeMsg.type!==params.type||noticeMsg.description!==params.description){
            api[params.type]({
                message: 'Notification Title',
                description: params.description,
                onClose:()=>{
                    setNoticeMsg({type: '',description:''})
                }
            });
            setNoticeMsg(params)
        }
    };

    React.useImperativeHandle(ref, () => ({
        childMethod
    }));

    return (
        <>
            {contextHolder}
        </>
    );
});

export default MyNotification;