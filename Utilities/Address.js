import React, { useState } from 'react';
import { useEffect } from 'react/cjs/react.development';
import {
    getAreaDataURL,
    getCityDataURL,
    getRegionDataURL
} from '../Components/Dashboard_1/Staff/api/apiUrl';
import { getApiCall } from '../Components/Dashboard_1/Staff/api/onlineEmployeeListApi';
import StyleSheet from './Address.module.css';

function Address({
    title,
    present,
    permanent,
    regionValue,
    cityValue,
    areaValue,
    addressValue,
    regionAction,
    cityAction,
    areaAction,
    addressAction
}) {
    const [allRegionValue, setAllRegionValue] = useState([]);
    const [allCityValue, setallCityValue] = React.useState([]);
    const [allAreaValue, setallAreaValue] = React.useState([]);

    useEffect(() => {
        getApiCall(getRegionDataURL)
            .then((response) => {
                setAllRegionValue(response);
            })
            .catch((error) => {
                console.log(`Error ${error}`);
            });

        getApiCall(getCityDataURL)
            .then((response) => {
                setallCityValue(response);
            })
            .catch((error) => {
                console.log(`Error ${error}`);
            });

        getApiCall(getAreaDataURL)
            .then((response) => {
                setallAreaValue(response);
            })
            .catch((error) => {
                console.log(`Error ${error}`);
            });
    }, []);

    // region component start
    function Region() {
        return (
            <div className={StyleSheet.region__container}>
                <div className={StyleSheet.region__container__title}>Region:</div>
                <div className={StyleSheet.region__container__selected__box}>
                    <select
                        style={
                            regionValue !== ''
                                ? { border: '0.13vw solid #da1e37' }
                                : { border: 'none', backgroundColor: '#F5F5F5' }
                        }
                        onClick={(e) => {
                            e.target.style.border = '0.13vw solid #da1e37';
                            e.target.style.backgroundColor = 'white';
                        }}
                        onChange={(e) => {
                            regionAction(e.target.value);
                        }}
                        value={regionValue}
                        name="region"
                        id="region">
                        <option value="null">Region</option>
                        {allRegionValue?.map((region) => (
                            <option key={region?.id} value={region?.id}>
                                {region?.region_name}
                            </option>
                        ))}
                    </select>
                </div>
            </div>
        );
    }
    // region component end

    // city component start
    function CityModel({ title, name, list, value, action }) {
        return (
            <div className={StyleSheet.city__container}>
                <div className={StyleSheet.city__container__title}>{title}:</div>
                <div className={StyleSheet.city__container__selected__box}>
                    <select
                        style={
                            value !== ''
                                ? { border: '0.13vw solid #da1e37' }
                                : { border: 'none', backgroundColor: '#F5F5F5' }
                        }
                        onClick={(e) => {
                            e.target.style.border = '0.13vw solid #da1e37';
                            e.target.style.backgroundColor = 'white';
                        }}
                        name={name}
                        onChange={(e) => {
                            action(e.target.value);
                        }}
                        value={value}>
                        <option value="null">City</option>
                        {list?.map((item) =>
                            item?.region?.id === Number(regionValue) ? (
                                <option key={item.id} value={item?.id}>
                                    {item.city_name}
                                </option>
                            ) : (
                                ''
                            )
                        )}
                    </select>
                </div>
            </div>
        );
    }
    // all city component end

    //  area component start
    function AreaModel({ title, name, value, action, areaList }) {
        return (
            <div className={StyleSheet.area__container}>
                <div className={StyleSheet.area__container__title}>{title}:</div>
                <div className={StyleSheet.area__container__selected__box}>
                    <select
                        name={name}
                        onClick={(e) => {
                            e.target.style.border = '0.13vw solid #da1e37';
                            e.target.style.backgroundColor = 'white';
                        }}
                        style={
                            value !== ''
                                ? { border: '0.13vw solid #da1e37' }
                                : { border: 'area', backgroundColor: '#F5F5F5' }
                        }
                        onChange={(e) => {
                            action(e.target.value);
                        }}
                        value={areaValue}>
                        <option value="">Area</option>
                        {areaList?.map((item, index) => {
                            if (item?.city.id === Number(cityValue)) {
                                return (
                                    <option key={index} value={item?.id}>
                                        {item?.area_name}
                                    </option>
                                );
                            }
                        })}
                    </select>
                </div>
            </div>
        );
    }
    // area component end

    return (
        <div className={StyleSheet.address__container}>
            <div className={StyleSheet.address__container__title}>{title}</div>
            <div className={StyleSheet.address__container__selected__box}>
                <div className={StyleSheet.address__container__selected__box__row__one}>
                    <Region />

                    <CityModel
                        list={allCityValue}
                        title={'City'}
                        value={cityValue}
                        action={cityAction}
                        name={'none'}
                    />
                </div>
                <div className={StyleSheet.address__container__selected__box__row__two}>
                    <AreaModel
                        title={'Area'}
                        name={'area'}
                        value={areaValue}
                        action={areaAction}
                        areaList={allAreaValue}
                    />

                    {/* render address input filed  */}
                    {present ? (
                        <div className={StyleSheet.input__address__container}>
                            <div className={StyleSheet.input__address__container__title}>
                                Address:
                            </div>
                            <div className={StyleSheet.input__address__container__input}>
                                <textarea
                                    onClick={(e) => {
                                        e.target.style.border = '0.13vw solid #da1e37';
                                        e.target.style.backgroundColor = 'white';
                                    }}
                                    style={
                                        addressValue !== ''
                                            ? { border: '0.13vw solid #da1e37' }
                                            : { border: 'area', backgroundColor: '#F5F5F5' }
                                    }
                                    name="address"
                                    onChange={(e) => {
                                        addressAction(e.target.value);
                                    }}
                                    value={addressValue}></textarea>
                            </div>
                        </div>
                    ) : permanent ? (
                        <div className={StyleSheet.input__address__container}>
                            <div className={StyleSheet.input__address__container__title}>
                                Address:
                            </div>
                            <div className={StyleSheet.input__address__container__input}>
                                <textarea
                                    onClick={(e) => {
                                        e.target.style.border = '0.13vw solid #da1e37';
                                        e.target.style.backgroundColor = 'white';
                                    }}
                                    style={
                                        addressValue !== ''
                                            ? { border: '0.13vw solid #da1e37' }
                                            : { border: 'area', backgroundColor: '#F5F5F5' }
                                    }
                                    name="address"
                                    onChange={(e) => {
                                        addressAction(e.target.value);
                                    }}
                                    value={addressValue}></textarea>
                            </div>
                        </div>
                    ) : (
                        ''
                    )}
                </div>
            </div>
        </div>
    );
}
export default React.memo(Address);
