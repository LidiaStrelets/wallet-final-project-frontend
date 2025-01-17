import React, { useEffect, useState } from 'react'
// import { Link, useLocation } from 'react-router-dom';
import Datetime from 'react-datetime'
import 'moment/locale/ru'
// import { addTransaction } from '../../redux/transactions'
// import { useDispatch } from 'react-redux'
import { validate } from 'indicative/validator'

import { ReactSVG } from 'react-svg'
import svgPlus from '../../images/plus-icon.svg'
import svgMinus from '../../images/minus-icon.svg'
import svgCalendar from '../../images/calendar-icon.svg';
import svgListIcon from '../../images/categories-list-icon.svg';
import svgClose from '../../images/modal-close-icon.svg'


import styles from './styles.module.css';

function AddTransaction({toggleModal, toggleAddTransaction}) {
    const [transactionType, setTransactionType] = useState("income")
    const [category, setCategory] = useState("Выберите категорию")
    const [listActive, setListActive] = useState(false)
    const [summ, setSumm] = useState('')
    const [date, setDate] = useState(new Date())
    const [comment, setComment] = useState('')

    // const dispatch = useDispatch()

    useEffect(() => {
        const backdrop = document.querySelector('#backdrop')
        const dropDownList = document.querySelector(styles.dropDownList)

        function clickListener(e) {
            if (e.target === backdrop) {
                toggleAddTransaction()
                toggleModal()
            }
            
            if (e.target !== backdrop && e.target !== dropDownList && listActive) {
                setListActive(!listActive)
            }
        }

        function keyListener(e) {
            if (e.code === 'Escape') {
                toggleAddTransaction()
                toggleModal()
            }
        }

        document.addEventListener('click', clickListener)
        document.addEventListener('keydown', keyListener)

        return function cleanup() {
            document.removeEventListener('click', clickListener)
            document.removeEventListener('keydown', keyListener)

        }

    }, [toggleAddTransaction, toggleModal, listActive])

    const schema = {
        type: 'required|string',
        category: 'required|string',
        sum: 'required|string',
        date: 'required',
        comment: 'string'
    }

// 
    function submitHandler(e) {
        e.preventDefault()
        const transaction = {
            type: transactionType,
            category,
            sum: summ,
            date,
            comment
        }

        console.log(typeof transaction.sum)

        validate(transaction, schema).then(console.log).catch(console.log)
        // dispatch(addTransaction(transaction))
        
    }
    
    function switchClickHandler(e) {
        if (!e.target.checked) {
            setTransactionType('spending')
            return
        }
         setTransactionType('income')
    }

    function categoryClickHandler(e) {
        setCategory(e.target.textContent)
        setListActive(!listActive)
    }

    function dateChange(e) {
        setDate(e._d)
    }

    function listOpen() {
        setListActive(!listActive)
    }

    function summChange(e) {
        const number = Number(e.target.value)
        const integer = Number.isInteger(number)

        if (!integer) {
            const [int, float] = String(number).split('.')
            setSumm(`${int}.${float.slice(0, 2)}`)
            return
        }

        setSumm(e.target.value)
    }
    
    function commentChange(e) {
        const field = document.querySelector(`.${styles.commentField}`)
        field.style.cssText = 'height:' + field.scrollHeight + 'px';
        setComment(e.target.value)
    }

    function closeComponent() {
        toggleAddTransaction()
        toggleModal()
    }


    // задача данных функций, повесить дополнительный класс по условию.
    function DropMenuActiveTrigger () {
        if (category !== 'Выберите категорию') {
            const basic = styles.dropDownField
            const active = styles.dropDownFieldActive
            
            return `${basic} ${active}`
        }

        return styles.dropDownField
    }

    function incomeActiveTrigger() {
        if (transactionType === 'income') {
            const basic = styles.transTypeText
            const active = styles.transTypeTextActive
            return `${basic} ${active}`
        }

        return styles.transTypeText
    }

    function spendingActiveTrigger() {
        if (transactionType === 'spending') {
            const basic = styles.transTypeText
            const active = styles.transTypeTextActive
            return `${basic} ${active}`
        }

        return styles.transTypeText
    }

    function switchToggle() {
        if (transactionType === 'income') {
            return styles.switchToggleIncome
        }

        return styles.switchToggleSpending
    }
    // задача данных функции, повесить дополнительный класс по условию.


    // разметка для выпадающего списка
    const dropDownJSX = (
        <div className={styles.dropDownContainer}>
            <div className={DropMenuActiveTrigger()} onClick={listOpen}>
                <span className={styles.selectedCategory}>{category}</span>
            </div>

            {listActive && <ul className={styles.dropDownList}>
                <li onClick={categoryClickHandler} className={styles.dropDownItem}>Основной</li>
                <li onClick={categoryClickHandler} className={styles.dropDownItem}>Еда</li>
                <li onClick={categoryClickHandler} className={styles.dropDownItem}>Авто</li>
                <li onClick={categoryClickHandler} className={styles.dropDownItem}>Развитие</li>
                <li onClick={categoryClickHandler} className={styles.dropDownItem}>Дети</li>
                <li onClick={categoryClickHandler} className={styles.dropDownItem}>Дом</li>
                <li onClick={categoryClickHandler} className={styles.dropDownItem}>Образование</li>
                <li onClick={categoryClickHandler} className={styles.dropDownItem}>Остальные</li>
            </ul>}

            <ReactSVG className={styles.dropDownIcon} src={svgListIcon} />
        </div>
    )
    // разметка для выпадающего списка

    return (
        <div className={styles.addTransContainer}>
            <div onClick={closeComponent} className={styles.closeBtnBox}>
                <ReactSVG className={styles.closeIcon} src={svgClose} />
            </div>
            <h2 className={styles.title}>Добавить транзакцию</h2>
            <form onSubmit={submitHandler} id="transaction" className={styles.form}>

                <div className={styles.transTypeContainer}>
                    <span className={incomeActiveTrigger()}>Доход</span>
                    <div className={styles.switchToggleContainer}>
                        <label className={styles.switchToggleBody} htmlFor="transType"></label>
                        <span className={switchToggle()}>
                            <ReactSVG
                                className={styles.switchToggleSvg}
                                src={transactionType === 'income' ? svgPlus : svgMinus} />
                        </span>
                    </div>
                    <input className={styles.switchToggleInput} onChange={switchClickHandler} name="transactionType" type="checkbox" id="transType" defaultChecked />
                    <span className={spendingActiveTrigger()}>Расход</span>
                </div>

                {/* рендер списка по условию */}
                {transactionType === 'spending' && dropDownJSX}
                {/* рендер списка по условию */}

                <div className={styles.summFieldContainer}>
                    <input className={styles.summField} onChange={summChange} required min="0" type="number" placeholder="0.00" value={summ} />
                </div>

                <div className={styles.calendarContainer}>
                    <Datetime onChange={dateChange} inputProps={{ className: styles.calendarField }} initialValue={date} closeOnSelect={true} timeFormat={false} />
                    <ReactSVG className={styles.calendarIcon} src={svgCalendar} />
                </div>

                <div className={styles.commentFieldContainer}>
                    <textarea onChange={commentChange} className={styles.commentField} value={comment} placeholder="место для вашей рекламы" />
                </div>
            </form>
            <div className={styles.buttonsContainer}>
                <button className={styles.submitButton} form="transaction" type="submit" >Добавить</button>
                <button onClick={closeComponent} className={styles.cancelButton}>Отмена</button>
            </div>
        </div>
    )
}

export default AddTransaction;
