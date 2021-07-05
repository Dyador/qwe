import h from './RightBar.module.css'
import Line from '../Line/Line'

const RightBar = () =>{
    return(
      <div className={h.RightBar}>
          <img className={h.RightBar_logo} src='https://st.depositphotos.com/1877361/1955/v/600/depositphotos_19551395-stock-illustration-alphabet-logo-design-letter-w.jpg' />
          <p className={h.text}> <span className={h.bold_text}>Track Time on Workwise </span> <br/>Pay only for the Hours</p>
          <Line />
          <Line />
          <div className={h.sl}>
            <a className={h.singup} href="#">SING UP</a><br/>
            <a className={h.larnmore} href="#">Learn More</a>
          </div>
      </div>
    );
}
export default RightBar;