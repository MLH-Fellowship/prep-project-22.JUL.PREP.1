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
const Iphone12mini = ({ children }) => {
    const isMobile = useMediaQuery({ maxWidth: 360 })
    return isMobile ? children : null
}
const Iphone12pro = ({ children }) => {
    const isMobile = useMediaQuery({ maxWidth: 390 })
    return isMobile ? children : null
}
const Iphone11 = ({ children }) => {
    const isMobile = useMediaQuery({ maxWidth: 414 })
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
        <Iphone12mini>
            <div className="Iphone12mini">
                <h3>{weather}</h3>
                <p>Feels like {feelsLike}°C</p>
                <i><p>{place}, {country}</p></i>
            </div>
        </Iphone12mini>
        <Iphone12pro>
            <div className="Iphone12pro">
                <h3>{weather}</h3>
                <p>Feels like {feelsLike}°C</p>
                <i><p>{place}, {country}</p></i> 
            </div>
        </Iphone12pro>
        <Iphone11>
            <div className="Iphone11">
                <h3>{weather}</h3>
                <p>Feels like {feelsLike}°C</p>
                <i><p>{place}, {country}</p></i>
            </div>
        </Iphone11>
    </div>
)

export default ResponsiveResults
