import { useState } from "react";
import { menuDatas } from "../../Data/Data";
import { BsXLg, BsChevronDown } from "react-icons/bs";
function MenuNavigation({ menuToggle, setMenuToggle }) {
    const [activeData, setActiveData] = useState(null);
    const handleClick = (id) => {
        setActiveData(id === activeData ? null : id);
    };
    return (
        <div className={`${menuToggle ? "menuNavigation open" : "menuNavigation"}`}>
            <div className="menu">
                <div className="shobeedobee">Shobedobee</div>
                <div className="menuX" onClick={() => setMenuToggle(false)}>
                    <BsXLg />
                </div>
            </div>
            <div className="menuDatas">
                {menuDatas.map((menuData, id) => {
                    return (
                        <div className="dataGroup" key={menuData.id} onClick={() => handleClick(id)}>

                            <div className="dataGroupName">
                                <div>{menuData.dataGroupName}</div>
                                <BsChevronDown
                                    className={`${id === activeData ? "rotate-180" : "rotate-0"}`}
                                />
                            </div>

                            {id === activeData && (
                                <div className="dataItems">
                                    {menuData.dataItems.map((dataItem, index) => (
                                        <a href="" key={index}>{dataItem}</a>
                                    ))}
                                </div>
                            )}
                        </div>
                    );
                })}
            </div>
            <div className="callUs">
                Call Us 08612531236
            </div>
            <div className="openHours">
                Operating Hour 9:00am to 7.30pm
            </div>
        </div>
    );
}

export default MenuNavigation;
