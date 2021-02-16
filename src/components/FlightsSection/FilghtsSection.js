import React from 'react'
import classes from './FilghtsSection.module.sass'

function FilghtsSection() {
  return (
    <div className={ classes.fligthsSection }>
      <div className={ classes.flightBlock }>
        <div className={ classes.flightHeader }>
          <div className={ classes.flightHeaderCompany }>
            <img src='https://upload.wikimedia.org/wikipedia/ru/thumb/4/47/LOT_Polish_Airlines_logo.svg/1280px-LOT_Polish_Airlines_logo.svg.png'></img>
          </div>
          <div className={ classes.flightHeaderPrice }>
            <p className={ classes.price }>21049 Р</p>
            <p className={ classes.priceMessage }>стоимость для одного взрослого пассажира</p>
          </div>
        </div>
        <div className={ classes.flightTo }>
          <div className={ classes.flightDirection }>
            <p>Москва, ШЕРЕМЕТЬЕВО <span>(SVO)</span></p>
            <p className={ classes.flightArrow }>&#10141;</p>
            <p>ЛОНДОН, Лондон, Хитроу <span>(LHR)</span></p>
          </div>
          <div className={ classes.flightTimes }>
            <p>20:40 <span>18 авг. вт</span></p>
            <p>&#x1F550; 14 ч 45 мин</p>
            <p><span>19 авг. ср</span> 09:25</p>
          </div>
          <div className={ classes.flightDivider }>
            <hr />
            <p className={ classes.transferInfo }>1 пересадка</p>
          </div>     
          <div className={ classes.flightOwner }>
            <p>Рейс выполняет: LOT Polish Airlines</p>
          </div>    
        </div>
        <div className={ classes.flightFrom }>
          <div className={ classes.flightDirection }>
            <p>ЛОНДОН, Лондон, Хитроу <span>(LHR)</span></p>
            <p className={ classes.flightArrow }>&#10141;</p>
            <p>Москва, ШЕРЕМЕТЬЕВО <span>(SVO)</span></p>
          </div>
          <div className={ classes.flightTimes }>
            <p>18:10 <span>19 авг. ср</span></p>
            <p>&#x1F550; 23 ч 35 мин</p>
            <p><span>20 авг. чт</span> 19:45</p>
          </div>
          <div className={ classes.flightDivider }>
            <hr />
            <p className={ classes.transferInfo }>1 пересадка</p>
          </div>     
          <div className={ classes.flightOwner }>
            <p>Рейс выполняет: LOT Polish Airlines</p>
          </div>   
        </div>
        <button>Выбрать</button>
      </div>
      
      <div className={ classes.flightBlock }>
        <div className={ classes.flightHeader }>
          <div className={ classes.flightHeaderCompany }>
            <img src='https://timurmishin.com/wp-content/uploads/2019/04/aeroflot2.png'></img>
          </div>
          <div className={ classes.flightHeaderPrice }>
            <p className={ classes.price }>31733 Р</p>
            <p className={ classes.priceMessage }>стоимость для одного взрослого пассажира</p>
          </div>
        </div>
        <div className={ classes.flightTo }>
          <div className={ classes.flightDirection }>
            <p>Москва, ШЕРЕМЕТЬЕВО <span>(SVO)</span></p>
            <p className={ classes.flightArrow }>&#10141;</p>
            <p>ЛОНДОН, Лондон, Хитроу <span>(LHR)</span></p>
          </div>
          <div className={ classes.flightTimes }>
            <p>07:45 <span>18 авг. вт</span></p>
            <p>&#x1F550; 4 ч 25 мин</p>
            <p><span>18 авг. ср</span> 09:30</p>
          </div>
          <div className={ classes.flightDivider }>
            <hr />
            <p className={ classes.transferInfo }>1 пересадка</p>
          </div>     
          <div className={ classes.flightOwner }>
            <p>Аэрофлот - российские авиалинии</p>
          </div>    
        </div>
        <div className={ classes.flightFrom }>
          <div className={ classes.flightDirection }>
            <p>ЛОНДОН, Лондон, Гатвик <span>(LGW)</span></p>
            <p className={ classes.flightArrow }>&#10141;</p>
            <p>Москва, ВНУКОВО <span>(VKO)</span></p>
          </div>
          <div className={ classes.flightTimes }>
            <p>17:10 <span>19 авг. ср</span></p>
            <p>&#x1F550; 15 ч 25 мин</p>
            <p><span>20 авг. чт</span> 10:35</p>
          </div>
          <div className={ classes.flightDivider }>
            <hr />
            <p className={ classes.transferInfo }>1 пересадка</p>
          </div>     
          <div className={ classes.flightOwner }>
            <p>Рейс выполняет: ГТК Россия</p>
          </div>   
        </div>
        <button>Выбрать</button>
      </div>     
      <button>Показать еще</button>
    </div>
  )
}

export default FilghtsSection
