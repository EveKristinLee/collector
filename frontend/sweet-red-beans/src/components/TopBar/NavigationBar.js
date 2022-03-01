import React, { useEffect, useReducer, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import styles from "../../css/TopBar/NavigationBar.module.css";
import BottomCategory from "./BottomCategory";
import { useNavigate } from "react-router";

const NavigationBar = () => {
    const navigation = useNavigate();
    const [hide, setHide] = useState(true);
    const [userId, setUserId] = useState(false);

    const onMouseEnter = () => {
        setHide(false);
    }

    const onMouseLeave = () => {
        setHide(true);
    }

    const eventClick = () => {
        navigation('/event');
        navigation(0);
    }

    const transactionClick = () => {
        navigation('/transaction');
        navigation(0);
    }

    const imformationShareClick = () => {
        navigation('/informationShare');
        navigation(0);
    }

    const DMClick = () => {
        // if(userId){
            navigation('/DM');
            navigation(0);
        // }
        // else {
        //     alert("로그인을 먼저 해주세요")
        //}
    }

    const mypageClick = () => {
        navigation('/mypage');
    }


    return (
        <>
        <nav>
            <ul>
                <li className={styles.dropdown}>
                    <div className={styles.dropdownMenu} onClick={eventClick}>이벤트</div>
                </li>
                <li className={styles.dropdown}>
                    <div className={styles.dropdownMenu} onClick={transactionClick}>대리구매</div>
                </li>
                <li className={styles.dropdown}>
                    <div className={styles.dropdownMenu} onClick={imformationShareClick}>커뮤니티</div>
                    <div className={styles.dropdownContent}>
                        <div onClick={imformationShareClick}>정보공유</div>
                    </div>
                </li>
                <li className={styles.dropdown}>
                    <div className={styles.dropdownMenu} onClick={DMClick}>개인메시지</div>
                </li>
                <li className={styles.dropdown}>
                    <div className={styles.dropdownMenu} onClick={mypageClick}>마이페이지</div>
                </li>
            </ul>
        </nav>
        
        </>
    );
}

export default NavigationBar;