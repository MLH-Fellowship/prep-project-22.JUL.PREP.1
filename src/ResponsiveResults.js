import { useMediaQuery } from 'react-responsive'

const Desktop = ({ children }) => {
    const isDesktop = useMediaQuery({ minWidth: 992 })
    return isDesktop ? children : null
}
const Tablet = ({ children }) => {
    const isTablet = useMediaQuery({ minWidth: 768, maxWidth: 991 })
    return isTablet ? children : null
}
const Mobile = ({ children }) => {
    const isMobile = useMediaQuery({ maxWidth: 767 })
    return isMobile ? children : null
}

const iphone12mini = ({ children }) => {
    const isMobile = useMediaQuery({ maxWidth: 360 })
    return isMobile ? children : null
}
const iphone12pro = ({ children }) => {
    const isMobile = useMediaQuery({ maxWidth: 390 })
    return isMobile ? children : null
}
const iphone11 = ({ children }) => {
    const isMobile = useMediaQuery({ maxWidth: 414 })
    return isMobile ? children : null
}
const oneplus6 = ({ children }) => {
    const isMobile = useMediaQuery({ maxWidth: 412 })
    return isMobile ? children : null
}
const extralargescreen = ({ children }) => {
    const isMobile = useMediaQuery({ minWidth: 1201 })
    return isMobile ? children : null
}

const ResponsiveResults = ({weather, feelsLike, country, place}) => (
    <div>
        <Desktop>
            <div className="Desktop">
                <h3>{weather}</h3>
                <p>Feels like {feelsLike}°C</p>
                <i><p>{place}, {country}</p></i>
            </div>
        </Desktop>
        <Tablet>
            <div className="Tablet">
                <h3>{weather}</h3>
                <p>Feels like {feelsLike}°C</p>
                <i><p>{place}, {country}</p></i>
            </div>
        </Tablet>
        <Mobile>
            <div className="Mobile">
                <h3>{weather}</h3>
                <p>Feels like {feelsLike}°C</p>
                <i><p>{place}, {country}</p></i>
            </div>
        </Mobile>
        <iphone12mini>
            <div className="iphone12mini">
                <h3>{weather}</h3>
                <p>Feels like {feelsLike}°C</p>
                <i><p>{place}, {country}</p></i>
            </div>
        </iphone12mini>
        <iphone12pro>
            <div className='iphone12pro'>
                <h3>{weather}</h3>
                <p>Feels like {feelsLike}°C</p>
                <i><p>{place}, {country}</p></i> 
            </div>
        </iphone12pro>
        <iphone11>
            <div className='iphone11'>
                <h3>{weather}</h3>
                <p>Feels like {feelsLike}°C</p>
                <i><p>{place}, {country}</p></i>
            </div>
        </iphone11>
        <oneplus6>
            <div className='oneplus6'>
                <h3>{weather}</h3>
                <p>Feels like {feelsLike}°C</p>
                <i><p>{place}, {country}</p></i>
            </div>
        </oneplus6>
        <extralargescreen>
            <div className='extralargescreen'>
                <h3>{weather}</h3>
                <p>Feels like {feelsLike}°C</p>
                <i><p>{place}, {country}</p></i>
            </div>
        </extralargescreen>
    </div>

    
)

export default ResponsiveResults
