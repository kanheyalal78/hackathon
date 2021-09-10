import classes from './Notification.module.css'; 
const Notification = () => {
    return <div className={classes.container}>
        <div className={`row ${classes.row}`}>
            <div className={`col-9 ${classes.content}`}>
                <b>Animesh Singh</b> wants to buy your random book
            </div>
            <div className={`col-1 ${classes.btn}`}>
                <span><i className={`fas fa-check ${classes.icon1}`}></i></span>
            </div>
            <div className={`col-2 ${classes.btn}`}>
                <span><i className={`fas fa-times ${classes.icon2}`}></i></span>
            </div>
        </div>
        <div className={`row ${classes.row}`}>
            <div className={`col-9 ${classes.content}`}>
                <b>Arbab Sahid</b> wants to buy your random book
            </div>
            <div className={`col-1 ${classes.btn}`}>
                <span><i className={`fas fa-check ${classes.icon1}`}></i></span>
            </div>
            <div className={`col-2 ${classes.btn}`}>
                <span><i className={`fas fa-times ${classes.icon2}`}></i></span>
            </div>
        </div>
        <div className={`row ${classes.row}`}>
            <div className={`col-9 ${classes.content}`}>
            <b>Somaditya Bindhani</b> wants to buy your random book

            </div>
            <div className={`col-1 ${classes.btn}`}>
                <span><i className={`fas fa-check ${classes.icon1}`}></i></span>
            </div>
            <div className={`col-2 ${classes.btn}`}>
                <span><i className={`fas fa-times ${classes.icon2}`}></i></span>
            </div>
        </div>
        <div className={`row ${classes.row}`}>
            <div className={`col-9 ${classes.content}`}>
                <b>Arbab Sahid</b> wants to buy your random book
            </div>
            <div className={`col-1 ${classes.btn}`}>
                <span><i className={`fas fa-check ${classes.icon1}`}></i></span>
            </div>
            <div className={`col-2 ${classes.btn}`}>
                <span><i className={`fas fa-times ${classes.icon2}`}></i></span>
            </div>
        </div>
        <div className={`row ${classes.row}`}>
            <div className={`col-9 ${classes.content}`}>
            <b>Somaditya Bindhani</b> wants to buy your random book

            </div>
            <div className={`col-1 ${classes.btn}`}>
                <span><i className={`fas fa-check ${classes.icon1}`}></i></span>
            </div>
            <div className={`col-2 ${classes.btn}`}>
                <span><i className={`fas fa-times ${classes.icon2}`}></i></span>
            </div>
        </div>
    </div>
};

export default Notification;