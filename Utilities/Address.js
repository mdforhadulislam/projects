import React from 'react';
import {
    getAreaData,
    getRegionData
} from '../Components/Dashboard_1/Staff/api/onlineEmployeeListApi';
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
    const [allCityValue, setallCityValue] = React.useState([]);
    const [allAreaValue, setallAreaValue] = React.useState([]);

    React.useEffect(() => {
        try {
            getRegionData().then((response) => {
                setallCityValue(response);
            });
            getAreaData().then((response) => {
                setallAreaValue(response);
            });
        } catch (error) {
            console.log('Return Error');
        }
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
                        <option value="">Region</option>
                        <option value="20">Barishal</option>
                        <option value="50">Chattogram</option>
                        <option value="120">Dhaka</option>
                        <option value="150">Khulna</option>
                        <option value="170">Mymensingh</option>
                        <option value="185">Rajshahi</option>
                        <option value="195">Ranpur</option>
                        <option value="205">Sylhet</option>
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
                        {list?.map((item, index) => {
                            if (item?.region_name === name) {
                                return (
                                    <option key={index} value={item?.city.id}>
                                        {item?.city.city_name}
                                    </option>
                                );
                            }
                        })}
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
                        {areaList.map((item, index) => {
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

                    {regionValue === '' ? (
                        <CityModel
                            list={[]}
                            title={'City'}
                            value=""
                            action={cityAction}
                            name={'none'}
                        />
                    ) : (
                        ''
                    )}
                    {regionValue === '20' ? (
                        <CityModel
                            list={allCityValue}
                            title={'City'}
                            value={cityValue}
                            action={cityAction}
                            name={'Barishal'}
                        />
                    ) : (
                        ''
                    )}
                    {regionValue === '50' ? (
                        <CityModel
                            list={allCityValue}
                            title={'City'}
                            value={cityValue}
                            action={cityAction}
                            name={'Chattogram'}
                        />
                    ) : (
                        ''
                    )}
                    {regionValue === '120' ? (
                        <CityModel
                            list={allCityValue}
                            title={'City'}
                            value={cityValue}
                            action={cityAction}
                            name={'Dhaka'}
                        />
                    ) : (
                        ''
                    )}
                    {regionValue === '150' ? (
                        <CityModel
                            list={allCityValue}
                            title={'City'}
                            value={cityValue}
                            action={cityAction}
                            name={'Khulna'}
                        />
                    ) : (
                        ''
                    )}
                    {regionValue === '170' ? (
                        <CityModel
                            list={allCityValue}
                            title={'City'}
                            value={cityValue}
                            action={cityAction}
                            name={'Mymensingh'}
                        />
                    ) : (
                        ''
                    )}
                    {regionValue === '185' ? (
                        <CityModel
                            list={allCityValue}
                            title={'City'}
                            value={cityValue}
                            action={cityAction}
                            name={'Rajshahi'}
                        />
                    ) : (
                        ''
                    )}
                    {regionValue === '195' ? (
                        <CityModel
                            list={allCityValue}
                            title={'City'}
                            value={cityValue}
                            action={cityAction}
                            name={'Rangpur'}
                        />
                    ) : (
                        ''
                    )}
                    {regionValue === '205' ? (
                        <CityModel
                            list={allCityValue}
                            title={'City'}
                            value={cityValue}
                            action={cityAction}
                            name={'Sylhet'}
                        />
                    ) : (
                        ''
                    )}
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

{
    /* barishal area start */
}
{
    /* {cityValue === 'barguna' ? <BargunaArea /> : ''}
                    {cityValue === 'agailjhara' ? <AgailjharaArea /> : ''}
                    {cityValue === 'babuganj' ? <BabuganjArea /> : ''}
                    {cityValue === 'barajalia' ? <BarajaliaArea /> : ''}
                    {cityValue === 'gouranadi' ? <GouranadiArea /> : ''}
                    {cityValue === 'mehendiganj' ? <MehendiganjArea /> : ''}
                    {cityValue === 'muladi' ? <MuladiArea /> : ''}
                    {cityValue === 'sahebganj' ? <SahebganjArea /> : ''}
                    {cityValue === 'barishal-town' ? <BarishalTownArea /> : ''}
                    {cityValue === 'barishal-uzirpur' ? <BarishalUzirpurArea /> : ''}
                    {cityValue === 'bhola' ? <BholaArea /> : ''}
                    {cityValue === 'jhalokati' ? <JhalokatiArea /> : ''}
                    {cityValue === 'patuakhali' ? <PatuakhaliArea /> : ''}
                    {cityValue === 'pirojpur' ? <PirojpurArea /> : ''} */
}
{
    /* barishal area end */
}

{
    /* Chattogram area start */
}
{
    /* {cityValue === 'anawara' ? <AnawaraArea /> : ''}
                    {cityValue === 'bandarban' ? <BandarbanArea /> : ''}
                    {cityValue === 'barakal' ? <BarakalArea /> : ''}
                    {cityValue === 'barura' ? <BaruraArea /> : ''}
                    {cityValue === 'basurhat' ? <BasurhatArea /> : ''}
                    {cityValue === 'begumganj' ? <BegumganjArea /> : ''}
                    {cityValue === 'bilaichhari' ? <BilaichhariArea /> : ''}
                    {cityValue === 'boalkhali' ? <BoalkhaliArea /> : ''}
                    {cityValue === 'brahmanbaria' ? <BrahmanbariaArea /> : ''}
                    {cityValue === 'brahmanpara' ? <BrahmanparaArea /> : ''}
                    {cityValue === 'burichang' ? <BurichangArea /> : ''}
                    {cityValue === 'chandina' ? <ChandinaArea /> : ''}
                    {cityValue === 'chandpur' ? <ChandpurArea /> : ''}
                    {cityValue === 'char alexgander' ? <CharAlexganderArea /> : ''}
                    {cityValue === 'chatkhil' ? <ChatkhilArea /> : ''}
                    {cityValue === 'chattogram sadar' ? <ChattogramSadarArea /> : ''}
                    {cityValue === 'chhagalnaia' ? <ChhagalnaiaArea /> : ''}
                    {cityValue === 'chiringga' ? <ChiringgaArea /> : ''}
                    {cityValue === 'chouddagram' ? <ChouddagramArea /> : ''}
                    {cityValue === 'comilla' ? <ComillaArea /> : ''}
                    {cityValue === 'coxs bazar' ? <CoxsBazarArea /> : ''}
                    {cityValue === 'dagonbhuia' ? <DagonbhuiaArea /> : ''}
                    {cityValue === 'daudkandi' ? <DaudkandiArea /> : ''}
                    {cityValue === 'davidhar' ? <DavidharArea /> : ''}
                    {cityValue === 'diginala' ? <DiginalaArea /> : ''}
                    {cityValue === 'east joara' ? <EastJoaraArea /> : ''}
                    {cityValue === 'faridganj' ? <FaridganjArea /> : ''}
                    {cityValue === 'fatikchhari' ? <FatikchhariArea /> : ''}
                    {cityValue === 'feni' ? <FeniArea /> : ''}
                    {cityValue === 'gorakghat' ? <GorakghatArea /> : ''}
                    {cityValue === 'hajiganj' ? <HajiganjArea /> : ''}
                    {cityValue === 'hathazari' ? <HathazariArea /> : ''}
                    {cityValue === 'hatiya' ? <HatiyaArea /> : ''}
                    {cityValue === 'hayemchar' ? <HayemcharArea /> : ''}
                    {cityValue === 'homna' ? <HomnaArea /> : ''}
                    {cityValue === 'jaldi' ? <JaldiArea /> : ''}
                    {cityValue === 'jarachhari' ? <JarachhariArea /> : ''}
                    {cityValue === 'kachua' ? <KachuaArea /> : ''}
                    {cityValue === 'kalampati' ? <KalampatiArea /> : ''}
                    {cityValue === 'kaptai' ? <KaptaiArea /> : ''}
                    {cityValue === 'kasba' ? <KasbaArea /> : ''}
                    {cityValue === 'khagrachari' ? <KhagrachariArea /> : ''}
                    {cityValue === 'kutubdia' ? <KutubdiaArea /> : ''}
                    {cityValue === 'laksam' ? <LaksamArea /> : ''}
                    {cityValue === 'lakshmipur' ? <LakshmipurArea /> : ''}
                    {cityValue === 'langalkot' ? <LangalkotArea /> : ''}
                    {cityValue === 'laxmichhari' ? <LaxmichhariArea /> : ''}
                    {cityValue === 'lohagara' ? <LohagaraArea /> : ''}
                    {cityValue === 'longachh' ? <LongachhArea /> : ''}
                    {cityValue === 'manikchhari' ? <ManikchhariArea /> : ''}
                    {cityValue === 'marishya' ? <MarishyaArea /> : ''}
                    {cityValue === 'matiranga' ? <MatirangaArea /> : ''}
                    {cityValue === 'matlobganj' ? <MatlobganjArea /> : ''}
                    {cityValue === 'mirsharai' ? <MirsharaiArea /> : ''}
                    {cityValue === 'muradnagar' ? <MuradnagarArea /> : ''}
                    {cityValue === 'nabinagar' ? <NabinagarArea /> : ''}
                    {cityValue === 'naniachhar' ? <NaniachharArea /> : ''}
                    {cityValue === 'noakhali' ? <NoakhaliArea /> : ''}
                    {cityValue === 'panchhari' ? <PanchhariArea /> : ''}
                    {cityValue === 'pashurampur' ? <PashurampurArea /> : ''}
                    {cityValue === 'patiya' ? <PatiyaArea /> : ''}
                    {cityValue === 'rajsthali' ? <RajsthaliArea /> : ''}
                    {cityValue === 'ramganj' ? <RamganjArea /> : ''}
                    {cityValue === 'ramghar' ? <RamgharArea /> : ''}
                    {cityValue === 'ramu' ? <RamuArea /> : ''}
                    {cityValue === 'rangamati' ? <RangamatiArea /> : ''}
                    {cityValue === 'rangunia' ? <RanguniaArea /> : ''}
                    {cityValue === 'raozan' ? <RaozanArea /> : ''}
                    {cityValue === 'raypur' ? <RaypurArea /> : ''}
                    {cityValue === 'sandwip' ? <SandwipArea /> : ''}
                    {cityValue === 'sarail' ? <SarailArea /> : ''}
                    {cityValue === 'satkania' ? <SatkaniaArea /> : ''}
                    {cityValue === 'senbag' ? <SenbagArea /> : ''}
                    {cityValue === 'shahrasti' ? <ShahrastiArea /> : ''}
                    {cityValue === 'sitakunda' ? <SitakundaArea /> : ''}
                    {cityValue === 'sonagazi' ? <SonagaziArea /> : ''}
                    {cityValue === 'teknaf' ? <TeknafArea /> : ''}
                    {cityValue === 'ukhia' ? <UkhiaArea /> : ''} */
}
{
    /* Chattogram area end */
}

{
    /* dhaka area start */
}
{
    /* {cityValue === 'dhaka-north' ? <DhakaNorthArea /> : ''}
                    {cityValue === 'dhaka-south' ? <DhakaSouthArea /> : ''}
                    {cityValue === 'faridpur' ? <FaridpurArea /> : ''}
                    {cityValue === 'gazipur' ? <GazipurArea /> : ''}
                    {cityValue === 'gopalganj' ? <GopalganjArea /> : ''}
                    {cityValue === 'keranigonj' ? <KeranigonjArea /> : ''}
                    {cityValue === 'kishoreganj' ? <KishoreganjArea /> : ''}
                    {cityValue === 'madaripur' ? <MadaripurArea /> : ''}
                    {cityValue === 'manikganj-shibloya' ? <ManikganjShibloyaArea /> : ''}
                    {cityValue === 'manikganj-singair' ? <ManikganjSingairArea /> : ''}
                    {cityValue === 'manikganj-town' ? <ManikganjTownArea /> : ''}
                    {cityValue === 'munshiganj-gajaria' ? <MunshiganjGajariaArea /> : ''}
                    {cityValue === 'munshiganj-lohajong' ? <MunshiganjLohajongArea /> : ''}
                    {cityValue === 'munshiganj-sirajdikhan' ? <MunshiganjSirajdikhanArea /> : ''}
                    {cityValue === 'munshiganj-town' ? <MunshiganjTownArea /> : ''}
                    {cityValue === 'narayanganj' ? <NarayanganjArea /> : ''}
                    {cityValue === 'narsingdi' ? <NarsingdiArea /> : ''}
                    {cityValue === 'nawabganj' ? <NawabganjArea /> : ''}
                    {cityValue === 'rajbari-baliakandi' ? <RajbariBaliakandiArea /> : ''}
                    {cityValue === 'rajbari-pangsha' ? <RajbariPangshaArea /> : ''}
                    {cityValue === 'rajbari-town' ? <RajbariTownArea /> : ''}
                    {cityValue === 'savar' ? <SavarArea /> : ''}
                    {cityValue === 'shariatpur-naria' ? <ShariatpurNariaArea /> : ''}
                    {cityValue === 'shariatpur-town' ? <ShariatpurTownArea /> : ''}
                    {cityValue === 'tangail-basail' ? <TangailBasailArea /> : ''}
                    {cityValue === 'tangail-bhuapur' ? <TangailBhuapurArea /> : ''}
                    {cityValue === 'tangail-deldur' ? <TangailDeldurArea /> : ''}
                    {cityValue === 'tangail-ghatail' ? <TangailGhatailArea /> : ''}
                    {cityValue === 'tangail-gopalpur' ? <TangailGopalpurArea /> : ''}
                    {cityValue === 'tangail-kalihati' ? <TangailKalihatiArea /> : ''}
                    {cityValue === 'tangail-kashkawlia' ? <TangailKashkawliaArea /> : ''}
                    {cityValue === 'tangail-madhupur' ? <TangailMadhupurArea /> : ''}
                    {cityValue === 'tangail-mirzapur' ? <TangailMirzapurArea /> : ''}
                    {cityValue === 'tangail-nagarpur' ? <TangailNagarpurArea /> : ''}
                    {cityValue === 'tangail-sakhipur' ? <TangailSakhipurArea /> : ''}
                    {cityValue === 'tangail-town' ? <TangailTownArea /> : ''}
                    {cityValue === 'tongi' ? <TongiArea /> : ''} */
}
{
    /* dhaka area start */
}

{
    /* Khulna area start  */
}
{
    /* {cityValue === 'bagerhat' ? <BagerhatArea /> : ''}
                    {cityValue === 'chuadanga' ? <ChuadangaArea /> : ''}
                    {cityValue === 'jashore' ? <JashoreArea /> : ''}
                    {cityValue === 'jhenaidah' ? <JhenaidahArea /> : ''}
                    {cityValue === 'khulna-alipur' ? <KhulnaAlipurArea /> : ''}
                    {cityValue === 'khulna-amadee' ? <KhulnaAmadeeArea /> : ''}
                    {cityValue === 'khulna-batiaghat' ? <KhulnaBatiaghatArea /> : ''}
                    {cityValue === 'khulna-chalna bazar' ? <KhulnaChalnaBazarArea /> : ''}
                    {cityValue === 'khulna-digalia' ? <KhulnaDigaliaArea /> : ''}
                    {cityValue === 'khulna-paikgachha' ? <KhulnaPaikgachhaArea /> : ''}
                    {cityValue === 'khulna-sajiara' ? <KhulnaSajiaraArea /> : ''}
                    {cityValue === 'khulna-terakhada' ? <KhulnaTerakhadaArea /> : ''}
                    {cityValue === 'khulna-town' ? <KhulnaTownArea /> : ''}
                    {cityValue === 'kushtia' ? <KushtiaArea /> : ''}
                    {cityValue === 'magura' ? <MaguraArea /> : ''}
                    {cityValue === 'meherpur' ? <MeherpurArea /> : ''}
                    {cityValue === 'narail' ? <NarailArea /> : ''}
                    {cityValue === 'satkhira' ? <SatkhiraArea /> : ''} */
}
{
    /* Khulna area end  */
}

{
    /* Mymensingh area start  */
}
{
    /* {cityValue === 'jamalpur-dewangonj' ? <JamalpurDewangonjArea /> : ''}
                    {cityValue === 'jamalpur-islampur' ? <JamalpurIslampurArea /> : ''}
                    {cityValue === 'jamalpur-madarganj' ? <JamalpurMadarganjArea /> : ''}
                    {cityValue === 'jamalpur-malandha' ? <JamalpurMalandhaArea /> : ''}
                    {cityValue === 'jamalpur-shorishbari' ? <JamalpurShorishbariArea /> : ''}
                    {cityValue === 'jamalpur-town' ? <JamalpurTownArea /> : ''}
                    {cityValue === 'mymensingh-gaforgaon' ? <MymensinghGaforgaonArea /> : ''}
                    {cityValue === 'mymensingh-gouripur' ? <MymensinghGouripurArea /> : ''}
                    {cityValue === 'mymensingh-haluaghat' ? <MymensinghHaluaghatArea /> : ''}
                    {cityValue === 'mymensingh-isshwargonj' ? <MymensinghIsshwargonjArea /> : ''}
                    {cityValue === 'mymensingh-muktagacha' ? <MymensinghMuktagachaArea /> : ''}
                    {cityValue === 'mymensingh-nandail' ? <MymensinghNandailArea /> : ''}
                    {cityValue === 'mymensingh-phulpur' ? <MymensinghPhulpurArea /> : ''}
                    {cityValue === 'mymensingh-town' ? <MymensinghTownArea /> : ''}
                    {cityValue === 'mymensingh-trishal' ? <MymensinghTrishalArea /> : ''}
                    {cityValue === 'netrakona' ? <NetrakonaArea /> : ''}
                    {cityValue === 'sherpur' ? <SherpurArea /> : ''} */
}
{
    /* Mymensingh area end  */
}

{
    /* Rajshahi area start  */
}
{
    /* {cityValue === 'bagura' ? <BaguraArea /> : ''}
                    {cityValue === 'chapai nawabganj' ? <ChapaiNawabganjArea /> : ''}
                    {cityValue === 'joypurhat' ? <JoypurhatArea /> : ''}
                    {cityValue === 'naogaon' ? <NaogaonArea /> : ''}
                    {cityValue === 'natore' ? <NatoreArea /> : ''}
                    {cityValue === 'pabna' ? <PabnaArea /> : ''}
                    {cityValue === 'rajshahi' ? <RajshahiArea /> : ''}
                    {cityValue === 'sirajganj' ? <SirajganjArea /> : ''} */
}
{
    /* Rajshahi area end */
}

{
    /* Ranpur area start  */
}
{
    /* {cityValue === 'dinajpur' ? <DinajpurArea /> : ''}
                    {cityValue === 'gaibandha' ? <GaibandhaArea /> : ''}
                    {cityValue === 'kurigram' ? <KurigramArea /> : ''}
                    {cityValue === 'lalmonirhat' ? <LalmonirhatArea /> : ''}
                    {cityValue === 'nilphamari' ? <NilphamariArea /> : ''}
                    {cityValue === 'panchagarh' ? <PanchagarhArea /> : ''}
                    {cityValue === 'rangpur' ? <RangpurArea /> : ''}
                    {cityValue === 'saidpur' ? <SaidpurArea /> : ''}
                    {cityValue === 'thakurgaon' ? <Thakurgaonrea /> : ''} */
}
{
    /* Ranpur area end */
}

{
    /* Sylhet area start  */
}
{
    /* {cityValue === 'balaganj' ? <Balaganj /> : ''}
                    {cityValue === 'bianibazar' ? <BianibazarArea /> : ''}
                    {cityValue === 'bishwanath' ? <BishwanathArea /> : ''}
                    {cityValue === 'fenchuganj' ? <FenchuganjArea /> : ''}
                    {cityValue === 'goainhat' ? <GoainhatArea /> : ''}
                    {cityValue === 'habiganj' ? <HabiganjArea /> : ''}
                    {cityValue === 'jakiganj' ? <JakiganjArea /> : ''}
                    {cityValue === 'kanaighat' ? <KanaighatArea /> : ''}
                    {cityValue === 'moulvibazar' ? <MoulvibazarArea /> : ''}
                    {cityValue === 'sunamganj' ? <SunamganjArea /> : ''}
                    {cityValue === 'sylhet sadar' ? <SylhetSadarArea /> : ''} */
}
{
    /* Sylhet area end */
}

// function BarishalCity() {
//     let barishalCityList = [
//         'City',
//         'barguna',
//         'agailjhara',
//         'babuganj',
//         'barajalia',
//         'gouranadi',
//         'mehendiganj',
//         'muladi',
//         'sahebganj',
//         'barishal-town',
//         'barishal-uzirpur',
//         'bhola',
//         'jhalokati',
//         'patuakhali',
//         'pirojpur'
//     ];
//     return (
//         <div className={StyleSheet.city__container}>
//             <div className={StyleSheet.city__container__title}>City:</div>
//             <div className={StyleSheet.city__container__selected__box}>
//                 <select
//                     style={
//                         cityValue !== 'city'
//                             ? { border: '0.13vw solid #da1e37' }
//                             : { border: 'none', backgroundColor: '#F5F5F5' }
//                     }
//                     onClick={(e) => {
//                         e.target.style.border = '0.13vw solid #da1e37';
//                         e.target.style.backgroundColor = 'white';
//                     }}
//                     name="barishalcity"
//                     id="barishalcity"
//                     onChange={(e) => {
//                         cityAction(e.target.value);
//                     }}
//                     value={cityValue}>
//                     {barishalCityList.map((city, index) => {
//                         return (
//                             <option key={index} value={city.toLowerCase()}>
//                                 {city}
//                             </option>
//                         );
//                     })}
//                 </select>
//             </div>
//         </div>
//     );
// }
// function ChattogramCity() {
//     let chattogramCityList = [
//         'City',
//         'anawara',
//         'bandarban',
//         'barakal',
//         'barura',
//         'basurhat',
//         'begumganj',
//         'bilaichhari',
//         'boalkhali',
//         'brahmanbaria',
//         'brahmanpara',
//         'burichang',
//         'chandina',
//         'chandpur',
//         'char alexgander',
//         'chatkhil',
//         'chattogram sadar',
//         'chhagalnaia',
//         'chiringga',
//         'chouddagram',
//         'comilla',
//         'coxs bazar',
//         'dagonbhuia',
//         'daudkandi',
//         'davidhar',
//         'diginala',
//         'east joara',
//         'faridganj',
//         'fatikchhari',
//         'feni',
//         'gorakghat',
//         'hajiganj',
//         'hathazari',
//         'hatiya',
//         'hayemchar',
//         'homna',
//         'jaldi',
//         'jarachhari',
//         'kachua',
//         'kalampati',
//         'kaptai',
//         'kasba',
//         'khagrachari',
//         'kutubdia',
//         'laksam',
//         'lakshmipur',
//         'langalkot',
//         'laxmichhari',
//         'lohagara',
//         'longachh',
//         'manikchhari',
//         'marishya',
//         'matiranga',
//         'matlobganj',
//         'mirsharai',
//         'muradnagar',
//         'nabinagar',
//         'naniachhar',
//         'noakhali',
//         'panchhari',
//         'pashurampur',
//         'patiya',
//         'rajsthali',
//         'ramganj',
//         'ramghar',
//         'ramu',
//         'rangamati',
//         'rangunia',
//         'raozan',
//         'raypur',
//         'sandwip',
//         'sarail',
//         'satkania',
//         'senbag',
//         'shahrasti',
//         'sitakunda',
//         'sonagazi',
//         'teknaf',
//         'ukhia'
//     ];

//     return (
//         <div className={StyleSheet.city__container}>
//             <div className={StyleSheet.city__container__title}>City:</div>
//             <div className={StyleSheet.city__container__selected__box}>
//                 <select
//                     style={
//                         cityValue !== 'city'
//                             ? { border: '0.13vw solid #da1e37' }
//                             : { border: 'none', backgroundColor: '#F5F5F5' }
//                     }
//                     onClick={(e) => {
//                         e.target.style.border = '0.13vw solid #da1e37';
//                         e.target.style.backgroundColor = 'white';
//                     }}
//                     name="barishalcity"
//                     id="barishalcity"
//                     onChange={(e) => {
//                         cityAction(e.target.value);
//                     }}
//                     value={cityValue}>
//                     {chattogramCityList.map((city, index) => {
//                         return (
//                             <option key={index} value={city.toLowerCase()}>
//                                 {city}
//                             </option>
//                         );
//                     })}
//                 </select>
//             </div>
//         </div>
//     );
// }
// function DhakaCity() {
//     let dhakaCityList = [
//         'City',
//         'dhaka-north',
//         'dhaka-south',
//         'faridpur',
//         'gazipur',
//         'gopalganj',
//         'keranigonj',
//         'kishoreganj',
//         'madaripur',
//         'manikganj-shibloya',
//         'manikganj-singair',
//         'manikganj-town',
//         'munshiganj-gajaria',
//         'munshiganj-lohajong',
//         'munshiganj-sirajdikhan',
//         'munshiganj-town',
//         'narayanganj',
//         'narsingdi',
//         'nawabganj',
//         'rajbari-baliakandi',
//         'rajbari-pangsha',
//         'rajbari-town',
//         'savar',
//         'shariatpur-naria',
//         'shariatpur-town',
//         'tangail-basail',
//         'tangail-bhuapur',
//         'tangail-deldur',
//         'tangail-ghatail',
//         'tangail-gopalpur',
//         'tangail-kalihati',
//         'tangail-kashkawlia',
//         'tangail-madhupur',
//         'tangail-mirzapur',
//         'tangail-nagarpur',
//         'tangail-sakhipur',
//         'tangail-town',
//         'tongi'
//     ];

//     return (
//         <div className={StyleSheet.city__container}>
//             <div className={StyleSheet.city__container__title}>City:</div>
//             <div className={StyleSheet.city__container__selected__box}>
//                 <select
//                     style={
//                         cityValue !== 'city'
//                             ? { border: '0.13vw solid #da1e37' }
//                             : { border: 'none', backgroundColor: '#F5F5F5' }
//                     }
//                     onClick={(e) => {
//                         e.target.style.border = '0.13vw solid #da1e37';
//                         e.target.style.backgroundColor = 'white';
//                     }}
//                     name="barishalcity"
//                     id="barishalcity"
//                     onChange={(e) => {
//                         cityAction(e.target.value);
//                     }}
//                     value={cityValue}>
//                     {dhakaCityList.map((city, index) => {
//                         return (
//                             <option key={index} value={city.toLowerCase()}>
//                                 {city}
//                             </option>
//                         );
//                     })}
//                 </select>
//             </div>
//         </div>
//     );
// }
// function KhulnaCity() {
//     let khulnaCityList = [
//         'City',
//         'bagerhat',
//         'chuadanga',
//         'jashore',
//         'jhenaidah',
//         'khulna-alipur',
//         'khulna-amadee',
//         'khulna-batiaghat',
//         'khulna-chalna bazar',
//         'khulna-digalia',
//         'khulna-paikgachha',
//         'khulna-sajiara',
//         'khulna-terakhada',
//         'khulna-town',
//         'kushtia',
//         'magura',
//         'meherpur',
//         'narail',
//         'satkhira'
//     ];

//     return (
//         <div className={StyleSheet.city__container}>
//             <div className={StyleSheet.city__container__title}>City:</div>
//             <div className={StyleSheet.city__container__selected__box}>
//                 <select
//                     style={
//                         cityValue !== 'city'
//                             ? { border: '0.13vw solid #da1e37' }
//                             : { border: 'none', backgroundColor: '#F5F5F5' }
//                     }
//                     onClick={(e) => {
//                         e.target.style.border = '0.13vw solid #da1e37';
//                         e.target.style.backgroundColor = 'white';
//                     }}
//                     name="barishalcity"
//                     id="barishalcity"
//                     onChange={(e) => {
//                         cityAction(e.target.value);
//                     }}
//                     value={cityValue}>
//                     {khulnaCityList.map((city, index) => {
//                         return (
//                             <option key={index} value={city.toLowerCase()}>
//                                 {city}
//                             </option>
//                         );
//                     })}
//                 </select>
//             </div>
//         </div>
//     );
// }
// function MymensinghCity() {
//     let mymensinghCityList = [
//         'City',
//         'jamalpur-dewangonj',
//         'jamalpur-islampur',
//         'jamalpur-madarganj',
//         'jamalpur-malandha',
//         'jamalpur-shorishbari',
//         'jamalpur-town',
//         'mymensingh-gaforgaon',
//         'mymensingh-gouripur',
//         'mymensingh-haluaghat',
//         'mymensingh-isshwargonj',
//         'mymensingh-muktagacha',
//         'mymensingh-nandail',
//         'mymensingh-phulpur',
//         'mymensingh-town',
//         'mymensingh-trishal',
//         'netrakona',
//         'sherpur'
//     ];

//     return (
//         <div className={StyleSheet.city__container}>
//             <div className={StyleSheet.city__container__title}>City:</div>
//             <div className={StyleSheet.city__container__selected__box}>
//                 <select
//                     style={
//                         cityValue !== 'city'
//                             ? { border: '0.13vw solid #da1e37' }
//                             : { border: 'none', backgroundColor: '#F5F5F5' }
//                     }
//                     onClick={(e) => {
//                         e.target.style.border = '0.13vw solid #da1e37';
//                         e.target.style.backgroundColor = 'white';
//                     }}
//                     name="barishalcity"
//                     id="barishalcity"
//                     onChange={(e) => {
//                         cityAction(e.target.value);
//                     }}
//                     value={cityValue}>
//                     {mymensinghCityList.map((city, index) => {
//                         return (
//                             <option key={index} value={city.toLowerCase()}>
//                                 {city}
//                             </option>
//                         );
//                     })}
//                 </select>
//             </div>
//         </div>
//     );
// }
// function RajshahiCity() {
//     let rajshahiCityList = [
//         'City',
//         'bagura',
//         'chapai nawabganj',
//         'joypurhat',
//         'naogaon',
//         'natore',
//         'pabna',
//         'rajshahi',
//         'sirajganj'
//     ];

//     return (
//         <div className={StyleSheet.city__container}>
//             <div className={StyleSheet.city__container__title}>City:</div>
//             <div className={StyleSheet.city__container__selected__box}>
//                 <select
//                     style={
//                         cityValue !== 'city'
//                             ? { border: '0.13vw solid #da1e37' }
//                             : { border: 'none', backgroundColor: '#F5F5F5' }
//                     }
//                     onClick={(e) => {
//                         e.target.style.border = '0.13vw solid #da1e37';
//                         e.target.style.backgroundColor = 'white';
//                     }}
//                     name="barishalcity"
//                     id="barishalcity"
//                     onChange={(e) => {
//                         cityAction(e.target.value);
//                     }}
//                     value={cityValue}>
//                     {rajshahiCityList.map((city, index) => {
//                         return (
//                             <option key={index} value={city.toLowerCase()}>
//                                 {city}
//                             </option>
//                         );
//                     })}
//                 </select>
//             </div>
//         </div>
//     );
// }
// function RanpurCity() {
//     let ranpurCityList = [
//         'City',
//         'dinajpur',
//         'gaibandha',
//         'kurigram',
//         'lalmonirhat',
//         'nilphamari',
//         'panchagarh',
//         'rangpur',
//         'saidpur',
//         'thakurgaon'
//     ];

//     return (
//         <div className={StyleSheet.city__container}>
//             <div className={StyleSheet.city__container__title}>City:</div>
//             <div className={StyleSheet.city__container__selected__box}>
//                 <select
//                     style={
//                         cityValue !== 'city'
//                             ? { border: '0.13vw solid #da1e37' }
//                             : { border: 'none', backgroundColor: '#F5F5F5' }
//                     }
//                     onClick={(e) => {
//                         e.target.style.border = '0.13vw solid #da1e37';
//                         e.target.style.backgroundColor = 'white';
//                     }}
//                     name="barishalcity"
//                     id="barishalcity"
//                     onChange={(e) => {
//                         cityAction(e.target.value);
//                     }}
//                     value={cityValue}>
//                     {ranpurCityList.map((city, index) => {
//                         return (
//                             <option key={index} value={city.toLowerCase()}>
//                                 {city}
//                             </option>
//                         );
//                     })}
//                 </select>
//             </div>
//         </div>
//     );
// }
// function SylhetCity() {
//     let ranpurCityList = [
//         'City',
//         'balaganj',
//         'bianibazar',
//         'bishwanath',
//         'fenchuganj',
//         'goainhat',
//         'gopalganj',
//         'habiganj',
//         'jakiganj',
//         'kanaighat',
//         'moulvibazar',
//         'sunamganj',
//         'sylhet sadar'
//     ];

//     return (
//         <div className={StyleSheet.city__container}>
//             <div className={StyleSheet.city__container__title}>City:</div>
//             <div className={StyleSheet.city__container__selected__box}>
//                 <select
//                     style={
//                         cityValue !== 'city'
//                             ? { border: '0.13vw solid #da1e37' }
//                             : { border: 'none', backgroundColor: '#F5F5F5' }
//                     }
//                     onClick={(e) => {
//                         e.target.style.border = '0.13vw solid #da1e37';
//                         e.target.style.backgroundColor = 'white';
//                     }}
//                     name="barishalcity"
//                     id="barishalcity"
//                     onChange={(e) => {
//                         cityAction(e.target.value);
//                     }}
//                     value={cityValue}>
//                     {ranpurCityList.map((city, index) => {
//                         return (
//                             <option key={index} value={city.toLowerCase()}>
//                                 {city}
//                             </option>
//                         );
//                     })}
//                 </select>
//             </div>
//         </div>
//     );
// }

// // barishal all area start
// function Area() {
// function BargunaArea() {
//     let bargunaAreaList = [
//         'amtail',
//         'bamna',
//         'barguna government college',
//         'barguna sadar',
//         'barguna west police farry',
//         'betagi',
//         'darul ulum',
//         'kakchira',
//         'nali bandar',
//         'patharghata'
//     ];

//     return (
//         <div className={StyleSheet.area__container}>
//             <div className={StyleSheet.area__container__title}>Area:</div>
//             <div className={StyleSheet.area__container__selected__box}>
//                 <select
//                     onClick={(e) => {
//                         e.target.style.border = '0.13vw solid #da1e37';
//                         e.target.style.backgroundColor = 'white';
//                     }}
//                     style={
//                         areaValue !== 'area'
//                             ? { border: '0.13vw solid #da1e37' }
//                             : { border: 'area', backgroundColor: '#F5F5F5' }
//                     }
//                     name="area"
//                     onChange={(e) => {
//                         areaAction(e.target.value);
//                     }}
//                     value={areaValue}>
//                     <option value="area">Area</option>
//                     {bargunaAreaList.map((area, index) => {
//                         return (
//                             <option value={area} key={index}>
//                                 {area}
//                             </option>
//                         );
//                     })}
//                 </select>
//             </div>
//         </div>
//     );
// }
// function AgailjharaArea() {
//     let agailjharaAreaList = [
//         'agailjhara area',
//         'agailjhara bazar',
//         'agailjhara sadar',
//         'gaila',
//         'paisarhat'
//     ];
//     return (
//         <div className={StyleSheet.area__container}>
//             <div className={StyleSheet.area__container__title}>Area:</div>
//             <div className={StyleSheet.area__container__selected__box}>
//                 <select
//                     onClick={(e) => {
//                         e.target.style.border = '0.13vw solid #da1e37';
//                         e.target.style.backgroundColor = 'white';
//                     }}
//                     style={
//                         areaValue !== 'area'
//                             ? { border: '0.13vw solid #da1e37' }
//                             : { border: 'area', backgroundColor: '#F5F5F5' }
//                     }
//                     name="area"
//                     onChange={(e) => {
//                         areaAction(e.target.value);
//                     }}
//                     value={areaValue}>
//                     <option value="area">Area</option>
//                     {agailjharaAreaList.map((area, index) => {
//                         return (
//                             <option value={area} key={index}>
//                                 {area}
//                             </option>
//                         );
//                     })}
//                 </select>
//             </div>
//         </div>
//     );
// }
// function BabuganjArea() {
//     let babuganjAreaList = [
//         'babuganj area',
//         'babuganj sadar',
//         'babuganj cadet college',
//         'chandpasha',
//         'dehergoti',
//         'guthia',
//         'madhabpasha',
//         'nizamuddin college',
//         'rahamatpur',
//         'thakur mallik'
//     ];

//     return (
//         <div className={StyleSheet.area__container}>
//             <div className={StyleSheet.area__container__title}>Area:</div>
//             <div className={StyleSheet.area__container__selected__box}>
//                 <select
//                     onClick={(e) => {
//                         e.target.style.border = '0.13vw solid #da1e37';
//                         e.target.style.backgroundColor = 'white';
//                     }}
//                     style={
//                         areaValue !== 'area'
//                             ? { border: '0.13vw solid #da1e37' }
//                             : { border: 'area', backgroundColor: '#F5F5F5' }
//                     }
//                     name="area"
//                     onChange={(e) => {
//                         areaAction(e.target.value);
//                     }}
//                     value={areaValue}>
//                     <option value="area">Area</option>
//                     {babuganjAreaList.map((area, index) => {
//                         return (
//                             <option value={area} key={index}>
//                                 {area}
//                             </option>
//                         );
//                     })}
//                 </select>
//             </div>
//         </div>
//     );
// }
// function BarajaliaArea() {
//     let barajaliaAreaList = ['barajalia sadar', 'osman manjil'];
//     return (
//         <div className={StyleSheet.area__container}>
//             <div className={StyleSheet.area__container__title}>Area:</div>
//             <div className={StyleSheet.area__container__selected__box}>
//                 <select
//                     onClick={(e) => {
//                         e.target.style.border = '0.13vw solid #da1e37';
//                         e.target.style.backgroundColor = 'white';
//                     }}
//                     style={
//                         areaValue !== 'area'
//                             ? { border: '0.13vw solid #da1e37' }
//                             : { border: 'area', backgroundColor: '#F5F5F5' }
//                     }
//                     name="area"
//                     onChange={(e) => {
//                         areaAction(e.target.value);
//                     }}
//                     value={areaValue}>
//                     <option value="area">Area</option>
//                     {barajaliaAreaList.map((area, index) => {
//                         return (
//                             <option value={area} key={index}>
//                                 {area}
//                             </option>
//                         );
//                     })}
//                 </select>
//             </div>
//         </div>
//     );
// }
// function GouranadiArea() {
//     let gouranadiAreaList = [
//         'batajor',
//         'gouranadi launch ghat',
//         'gouranadi sadar',
//         'kashemabad',
//         'mirdha market',
//         'tarki bandar'
//     ];

//     return (
//         <div className={StyleSheet.area__container}>
//             <div className={StyleSheet.area__container__title}>Area:</div>
//             <div className={StyleSheet.area__container__selected__box}>
//                 <select
//                     onClick={(e) => {
//                         e.target.style.border = '0.13vw solid #da1e37';
//                         e.target.style.backgroundColor = 'white';
//                     }}
//                     style={
//                         areaValue !== 'area'
//                             ? { border: '0.13vw solid #da1e37' }
//                             : { border: 'area', backgroundColor: '#F5F5F5' }
//                     }
//                     name="area"
//                     onChange={(e) => {
//                         areaAction(e.target.value);
//                     }}
//                     value={areaValue}>
//                     <option value="area">Area</option>
//                     {gouranadiAreaList.map((area, index) => {
//                         return (
//                             <option value={area} key={index}>
//                                 {area}
//                             </option>
//                         );
//                     })}
//                 </select>
//             </div>
//         </div>
//     );
// }
// function MehendiganjArea() {
//     let mehendiganjAreaList = [
//         'mehendiganj area',
//         'langutia',
//         'laskarpur',
//         'mehendiganj sadar',
//         'nalgora',
//         'ulania'
//     ];
//     return (
//         <div className={StyleSheet.area__container}>
//             <div className={StyleSheet.area__container__title}>Area:</div>
//             <div className={StyleSheet.area__container__selected__box}>
//                 <select
//                     onClick={(e) => {
//                         e.target.style.border = '0.13vw solid #da1e37';
//                         e.target.style.backgroundColor = 'white';
//                     }}
//                     style={
//                         areaValue !== 'area'
//                             ? { border: '0.13vw solid #da1e37' }
//                             : { border: 'area', backgroundColor: '#F5F5F5' }
//                     }
//                     name="area"
//                     onChange={(e) => {
//                         areaAction(e.target.value);
//                     }}
//                     value={areaValue}>
//                     <option value="area">Area</option>
//                     {mehendiganjAreaList.map((area, index) => {
//                         return (
//                             <option value={area} key={index}>
//                                 {area}
//                             </option>
//                         );
//                     })}
//                 </select>
//             </div>
//         </div>
//     );
// }
// function MuladiArea() {
//     let muladiAreaList = [
//         'bara madhab rayer char',
//         'charkalekhan',
//         'kazirchar',
//         'muladi sadar'
//     ];
//     return (
//         <div className={StyleSheet.area__container}>
//             <div className={StyleSheet.area__container__title}>Area:</div>
//             <div className={StyleSheet.area__container__selected__box}>
//                 <select
//                     onClick={(e) => {
//                         e.target.style.border = '0.13vw solid #da1e37';
//                         e.target.style.backgroundColor = 'white';
//                     }}
//                     style={
//                         areaValue !== 'area'
//                             ? { border: '0.13vw solid #da1e37' }
//                             : { border: 'area', backgroundColor: '#F5F5F5' }
//                     }
//                     name="area"
//                     onChange={(e) => {
//                         areaAction(e.target.value);
//                     }}
//                     value={areaValue}>
//                     <option value="area">Area</option>
//                     {muladiAreaList.map((area, index) => {
//                         return (
//                             <option value={area} key={index}>
//                                 {area}
//                             </option>
//                         );
//                     })}
//                 </select>
//             </div>
//         </div>
//     );
// }
// function SahebganjArea() {
//     let sahebganjAreaList = [
//         'charamandi',
//         'kalaskati',
//         'padri shibpur',
//         'sahebganj',
//         'shialguni'
//     ];

//     return (
//         <div className={StyleSheet.area__container}>
//             <div className={StyleSheet.area__container__title}>Area:</div>
//             <div className={StyleSheet.area__container__selected__box}>
//                 <select
//                     onClick={(e) => {
//                         e.target.style.border = '0.13vw solid #da1e37';
//                         e.target.style.backgroundColor = 'white';
//                     }}
//                     style={
//                         areaValue !== 'area'
//                             ? { border: '0.13vw solid #da1e37' }
//                             : { border: 'area', backgroundColor: '#F5F5F5' }
//                     }
//                     name="area"
//                     onChange={(e) => {
//                         areaAction(e.target.value);
//                     }}
//                     value={areaValue}>
//                     <option value="area">Area</option>
//                     {sahebganjAreaList.map((area, index) => {
//                         return (
//                             <option value={area} key={index}>
//                                 {area}
//                             </option>
//                         );
//                     })}
//                 </select>
//             </div>
//         </div>
//     );
// }
// function BarishalTownArea() {
//     let barishalTownAreaList = [
//         'barishal kazipara',
//         'barishal sadar',
//         'bibir pukur',
//         'bukhainagar',
//         'chahutpur',
//         'jaguarhat',
//         'kashipur',
//         'kawnia',
//         'moth baria',
//         'natun bazar',
//         'patang',
//         'rajmahal',
//         'rupatali',
//         'sadar upazila',
//         'sagardi',
//         'saheberhat',
//         'sugandia',
//         'taltali',
//         'tia khali'
//     ];

//     return (
//         <div className={StyleSheet.area__container}>
//             <div className={StyleSheet.area__container__title}>Area:</div>
//             <div className={StyleSheet.area__container__selected__box}>
//                 <select
//                     onClick={(e) => {
//                         e.target.style.border = '0.13vw solid #da1e37';
//                         e.target.style.backgroundColor = 'white';
//                     }}
//                     style={
//                         areaValue !== 'area'
//                             ? { border: '0.13vw solid #da1e37' }
//                             : { border: 'area', backgroundColor: '#F5F5F5' }
//                     }
//                     name="area"
//                     onChange={(e) => {
//                         areaAction(e.target.value);
//                     }}
//                     value={areaValue}>
//                     <option value="area">Area</option>
//                     {barishalTownAreaList.map((area, index) => {
//                         return (
//                             <option value={area} key={index}>
//                                 {area}
//                             </option>
//                         );
//                     })}
//                 </select>
//             </div>
//         </div>
//     );
// }
// function BarishalUzirpurArea() {
//     let barishalUzirpurAreaList = [
//         'dakuarhat',
//         'dhamura',
//         'jugirkanda',
//         'shikarpur',
//         'uzirpur bazar',
//         'uzirpur sadar',
//         'wazirpur baza'
//     ];
//     return (
//         <div className={StyleSheet.area__container}>
//             <div className={StyleSheet.area__container__title}>Area:</div>
//             <div className={StyleSheet.area__container__selected__box}>
//                 <select
//                     onClick={(e) => {
//                         e.target.style.border = '0.13vw solid #da1e37';
//                         e.target.style.backgroundColor = 'white';
//                     }}
//                     style={
//                         areaValue !== 'area'
//                             ? { border: '0.13vw solid #da1e37' }
//                             : { border: 'area', backgroundColor: '#F5F5F5' }
//                     }
//                     name="area"
//                     onChange={(e) => {
//                         areaAction(e.target.value);
//                     }}
//                     value={areaValue}>
//                     <option value="area">Area</option>
//                     {barishalUzirpurAreaList.map((area, index) => {
//                         return (
//                             <option value={area} key={index}>
//                                 {area}
//                             </option>
//                         );
//                     })}
//                 </select>
//             </div>
//         </div>
//     );
// }
// function BholaArea() {
//     let bholaAreaList = [
//         'abhohawa office road',
//         'ali nagar',
//         'bangla school mor',
//         'banker hat',
//         'bhola bapta',
//         'bhola boys school road',
//         'bhola central post office',
//         'bhola college road',
//         'bhola girls college road',
//         'bhola natun bazar',
//         'bhola pranishompod road',
//         'bhola sadar',
//         'bhola sadar hospital road',
//         'bhola ukil para',
//         'borhanuddin upo',
//         'charfashion',
//         'chornoyabad',
//         'chorshami',
//         'daurihat',
//         'dorga road',
//         'doulatkhan',
//         'dularhat',
//         'gazaria',
//         'hajipur',
//         'hajirhat',
//         'hatshoshiganj',
//         'jamiralota',
//         'joynagar',
//         'kalibari road',
//         'kalikhola road',
//         'kiramatganj',
//         'lalmohan upo',
//         'mirzakalu',
//         'mostofa kamal bus stand',
//         'nasir mazi',
//         'new elisha bus stand',
//         'nobi pur',
//         'old elisha bus stand',
//         'p.t.i. road',
//         'pouro khathali',
//         'roton pur',
//         'sodurchar',
//         'tulatoli',
//         'western para'
//     ];
//     return (
//         <div className={StyleSheet.area__container}>
//             <div className={StyleSheet.area__container__title}>Area:</div>
//             <div className={StyleSheet.area__container__selected__box}>
//                 <select
//                     onClick={(e) => {
//                         e.target.style.border = '0.13vw solid #da1e37';
//                         e.target.style.backgroundColor = 'white';
//                     }}
//                     style={
//                         areaValue !== 'area'
//                             ? { border: '0.13vw solid #da1e37' }
//                             : { border: 'area', backgroundColor: '#F5F5F5' }
//                     }
//                     name="area"
//                     onChange={(e) => {
//                         areaAction(e.target.value);
//                     }}
//                     value={areaValue}>
//                     <option value="area">Area</option>
//                     {bholaAreaList.map((area, index) => {
//                         return (
//                             <option value={area} key={index}>
//                                 {area}
//                             </option>
//                         );
//                     })}
//                 </select>
//             </div>
//         </div>
//     );
// }
// function JhalokatiArea() {
//     let jhalokatiAreaList = [
//         'amua',
//         'baukathi',
//         'beerkathi',
//         'gabha',
//         'jhalokati sadar',
//         'kathalia',
//         'nabagram',
//         'nalchhiti',
//         'naimatee',
//         'rajapur',
//         'shekherhat',
//         'shoulajalia'
//     ];
//     return (
//         <div className={StyleSheet.area__container}>
//             <div className={StyleSheet.area__container__title}>Area:</div>
//             <div className={StyleSheet.area__container__selected__box}>
//                 <select
//                     onClick={(e) => {
//                         e.target.style.border = '0.13vw solid #da1e37';
//                         e.target.style.backgroundColor = 'white';
//                     }}
//                     style={
//                         areaValue !== 'area'
//                             ? { border: '0.13vw solid #da1e37' }
//                             : { border: 'area', backgroundColor: '#F5F5F5' }
//                     }
//                     name="area"
//                     onChange={(e) => {
//                         areaAction(e.target.value);
//                     }}
//                     value={areaValue}>
//                     <option value="area">Area</option>
//                     {jhalokatiAreaList.map((area, index) => {
//                         return (
//                             <option value={area} key={index}>
//                                 {area}
//                             </option>
//                         );
//                     })}
//                 </select>
//             </div>
//         </div>
//     );
// }
// function PatuakhaliArea() {
//     let patuakhaliAreaList = [
//         'bagabandar',
//         'bauphal',
//         'birpasha',
//         'dashmina',
//         'dumkee',
//         'galachipa',
//         'gazipur bandar',
//         'hetalia badhghat',
//         'kalaia',
//         'kalishari',
//         'katpotti',
//         'khepupara',
//         'mahipur',
//         'mirjaganj sarak',
//         'mitha pukur par',
//         'moukaran',
//         'mukul cinema hall',
//         'nobab para',
//         'patuakhali banani',
//         'patuakhali jailkhana road',
//         'patuakhali medical college hospital',
//         'patuakhali notun bazar',
//         'patuakhali pourosova',
//         'patuakhali puran bazar',
//         'patuakhali sadar',
//         'patuakhali shilpokola academy',
//         'rahimabad',
//         'subidkhali'
//     ];
//     return (
//         <div className={StyleSheet.area__container}>
//             <div className={StyleSheet.area__container__title}>Area:</div>
//             <div className={StyleSheet.area__container__selected__box}>
//                 <select
//                     onClick={(e) => {
//                         e.target.style.border = '0.13vw solid #da1e37';
//                         e.target.style.backgroundColor = 'white';
//                     }}
//                     style={
//                         areaValue !== 'area'
//                             ? { border: '0.13vw solid #da1e37' }
//                             : { border: 'area', backgroundColor: '#F5F5F5' }
//                     }
//                     name="area"
//                     onChange={(e) => {
//                         areaAction(e.target.value);
//                     }}
//                     value={areaValue}>
//                     <option value="area">Area</option>
//                     {patuakhaliAreaList.map((area, index) => {
//                         return (
//                             <option value={area} key={index}>
//                                 {area}
//                             </option>
//                         );
//                     })}
//                 </select>
//             </div>
//         </div>
//     );
// }
// function PirojpurArea() {
//     let pirojpurAreaList = [
//         'amla para',
//         'banaripara',
//         'betmor natun hat',
//         'bhandaria',
//         'bolaka club road',
//         'bolassor bridge',
//         'boro mosjid',
//         'c.i para',
//         'chakhar',
//         'damudar bridge',
//         'darus sunnat',
//         'dhaoa',
//         'dokhin shikar pur',
//         'dopa bara',
//         'duppasa',
//         'gulishakhali',
//         'halta',
//         'hularhat',
//         'jalabari',
//         'jolagati',
//         'joykul',
//         'kanudashkathi',
//         'kaukhali',
//         'kaurikhara',
//         'keundia',
//         'masim pur',
//         'matani road',
//         'mathbaria',
//         'mohila college road',
//         'muchi para',
//         'nazirpur',
//         'nirer goli',
//         'parerhat',
//         'pirojpur adarsha para',
//         'pirojpur boropul',
//         'pirojpur bot tola',
//         'pirojpur college road',
//         'pirojpur dc office',
//         'pirojpur judge court',
//         'pirojpur lged',
//         'pirojpur new bus stand',
//         'pirojpur p.t.i road',
//         'pirojpur palpara',
//         'pirojpur police line',
//         'pirojpur police station',
//         'pirojpur post office',
//         'pirojpur pouro shoshan',
//         'pirojpur puran pouroshova road',
//         'pirojpur sadar',
//         'pirojpur sadar hospital',
//         'pirojpur sadar thana',
//         'pirojpur surgicare',
//         'pirojpur town club',
//         'pirojpur ukil para',
//         'rajar hat',
//         'sheik para',
//         'shikha office',
//         'shilarganj',
//         'sriramkathi',
//         'swarupkathi',
//         'tiarkhali',
//         'tushkhali',
//         'yasinkhar pol'
//     ];
//     return (
//         <div className={StyleSheet.area__container}>
//             <div className={StyleSheet.area__container__title}>Area:</div>
//             <div className={StyleSheet.area__container__selected__box}>
//                 <select
//                     onClick={(e) => {
//                         e.target.style.border = '0.13vw solid #da1e37';
//                         e.target.style.backgroundColor = 'white';
//                     }}
//                     style={
//                         areaValue !== 'area'
//                             ? { border: '0.13vw solid #da1e37' }
//                             : { border: 'area', backgroundColor: '#F5F5F5' }
//                     }
//                     name="area"
//                     onChange={(e) => {
//                         areaAction(e.target.value);
//                     }}
//                     value={areaValue}>
//                     <option value="area">Area</option>
//                     {pirojpurAreaList.map((area, index) => {
//                         return (
//                             <option value={area} key={index}>
//                                 {area}
//                             </option>
//                         );
//                     })}
//                 </select>
//             </div>
//         </div>
//     );
// }
// // barishal all area end

// // Chattogram all area start
// function AnawaraArea() {
//     let anawaraAreaList = ['anawara battali', 'anawara paroikora', 'anawara'];
//     return (
//         <div className={StyleSheet.area__container}>
//             <div className={StyleSheet.area__container__title}>Area:</div>
//             <div className={StyleSheet.area__container__selected__box}>
//                 <select
//                     onClick={(e) => {
//                         e.target.style.border = '0.13vw solid #da1e37';
//                         e.target.style.backgroundColor = 'white';
//                     }}
//                     style={
//                         areaValue !== 'area'
//                             ? { border: '0.13vw solid #da1e37' }
//                             : { border: 'area', backgroundColor: '#F5F5F5' }
//                     }
//                     name="area"
//                     onChange={(e) => {
//                         areaAction(e.target.value);
//                     }}
//                     value={areaValue}>
//                     <option value="area">Area</option>
//                     {anawaraAreaList.map((area, index) => {
//                         return (
//                             <option value={area} key={index}>
//                                 {area}
//                             </option>
//                         );
//                     })}
//                 </select>
//             </div>
//         </div>
//     );
// }
// function BandarbanArea() {
//     let bandarbanAreaList = [
//         'alikadam',
//         'bandarban sadar',
//         'naikhong',
//         'roanchhari',
//         'ruma',
//         'thanchi',
//         'thanchi lama'
//     ];
//     return (
//         <div className={StyleSheet.area__container}>
//             <div className={StyleSheet.area__container__title}>Area:</div>
//             <div className={StyleSheet.area__container__selected__box}>
//                 <select
//                     onClick={(e) => {
//                         e.target.style.border = '0.13vw solid #da1e37';
//                         e.target.style.backgroundColor = 'white';
//                     }}
//                     style={
//                         areaValue !== 'area'
//                             ? { border: '0.13vw solid #da1e37' }
//                             : { border: 'area', backgroundColor: '#F5F5F5' }
//                     }
//                     name="area"
//                     onChange={(e) => {
//                         areaAction(e.target.value);
//                     }}
//                     value={areaValue}>
//                     <option value="area">Area</option>
//                     {bandarbanAreaList.map((area, index) => {
//                         return (
//                             <option value={area} key={index}>
//                                 {area}
//                             </option>
//                         );
//                     })}
//                 </select>
//             </div>
//         </div>
//     );
// }
// function BarakalArea() {
//     let barakalAreaList = ['barakal bazar', 'barakal sadar', 'panchagram'];
//     return (
//         <div className={StyleSheet.area__container}>
//             <div className={StyleSheet.area__container__title}>Area:</div>
//             <div className={StyleSheet.area__container__selected__box}>
//                 <select
//                     onClick={(e) => {
//                         e.target.style.border = '0.13vw solid #da1e37';
//                         e.target.style.backgroundColor = 'white';
//                     }}
//                     style={
//                         areaValue !== 'area'
//                             ? { border: '0.13vw solid #da1e37' }
//                             : { border: 'area', backgroundColor: '#F5F5F5' }
//                     }
//                     name="area"
//                     onChange={(e) => {
//                         areaAction(e.target.value);
//                     }}
//                     value={areaValue}>
//                     <option value="area">Area</option>
//                     {barakalAreaList.map((area, index) => {
//                         return (
//                             <option value={area} key={index}>
//                                 {area}
//                             </option>
//                         );
//                     })}
//                 </select>
//             </div>
//         </div>
//     );
// }
// function BaruraArea() {
//     let baruraAreaList = ['barura murdafarganj', 'barura poyalgachha', 'barura sadar'];
//     return (
//         <div className={StyleSheet.area__container}>
//             <div className={StyleSheet.area__container__title}>Area:</div>
//             <div className={StyleSheet.area__container__selected__box}>
//                 <select
//                     onClick={(e) => {
//                         e.target.style.border = '0.13vw solid #da1e37';
//                         e.target.style.backgroundColor = 'white';
//                     }}
//                     style={
//                         areaValue !== 'area'
//                             ? { border: '0.13vw solid #da1e37' }
//                             : { border: 'area', backgroundColor: '#F5F5F5' }
//                     }
//                     name="area"
//                     onChange={(e) => {
//                         areaAction(e.target.value);
//                     }}
//                     value={areaValue}>
//                     <option value="area">Area</option>
//                     {baruraAreaList.map((area, index) => {
//                         return (
//                             <option value={area} key={index}>
//                                 {area}
//                             </option>
//                         );
//                     })}
//                 </select>
//             </div>
//         </div>
//     );
// }
// function BasurhatArea() {
//     let basurhatAreaList = ['basurhat basur hat', 'basurhat charhajari'];
//     return (
//         <div className={StyleSheet.area__container}>
//             <div className={StyleSheet.area__container__title}>Area:</div>
//             <div className={StyleSheet.area__container__selected__box}>
//                 <select
//                     onClick={(e) => {
//                         e.target.style.border = '0.13vw solid #da1e37';
//                         e.target.style.backgroundColor = 'white';
//                     }}
//                     style={
//                         areaValue !== 'area'
//                             ? { border: '0.13vw solid #da1e37' }
//                             : { border: 'area', backgroundColor: '#F5F5F5' }
//                     }
//                     name="area"
//                     onChange={(e) => {
//                         areaAction(e.target.value);
//                     }}
//                     value={areaValue}>
//                     <option value="area">Area</option>
//                     {basurhatAreaList.map((area, index) => {
//                         return (
//                             <option value={area} key={index}>
//                                 {area}
//                             </option>
//                         );
//                     })}
//                 </select>
//             </div>
//         </div>
//     );
// }
// function BegumganjArea() {
//     let begumganjAreaList = [
//         'begumganj alaiarpur',
//         'begumganj amisha para',
//         'begumganj banglabazar',
//         'begumganj bazra',
//         'begumganj bhabani jibanpur',
//         'begumganj choumohani',
//         'begumganj dauti',
//         'begumganj durgapur',
//         'begumganj gopalpur',
//         'begumganj jamidar hat',
//         'begumganj joyag',
//         'begumganj joynarayanpur',
//         'begumganj khalafat bazar',
//         'begumganj khalishpur',
//         'begumganj maheshganj',
//         'begumganj mir owarishpur',
//         'begumganj nadona',
//         'begumganj nandiapara',
//         'begumganj oachhekpur',
//         'begumganj rajganj',
//         'begumganj sadar',
//         'begumganj sonaimuri',
//         'begumganj tangirpar',
//         'begumganj thanar hat'
//     ];
//     return (
//         <div className={StyleSheet.area__container}>
//             <div className={StyleSheet.area__container__title}>Area:</div>
//             <div className={StyleSheet.area__container__selected__box}>
//                 <select
//                     onClick={(e) => {
//                         e.target.style.border = '0.13vw solid #da1e37';
//                         e.target.style.backgroundColor = 'white';
//                     }}
//                     style={
//                         areaValue !== 'area'
//                             ? { border: '0.13vw solid #da1e37' }
//                             : { border: 'area', backgroundColor: '#F5F5F5' }
//                     }
//                     name="area"
//                     onChange={(e) => {
//                         areaAction(e.target.value);
//                     }}
//                     value={areaValue}>
//                     <option value="area">Area</option>
//                     {begumganjAreaList.map((area, index) => {
//                         return (
//                             <option value={area} key={index}>
//                                 {area}
//                             </option>
//                         );
//                     })}
//                 </select>
//             </div>
//         </div>
//     );
// }
// function BilaichhariArea() {
//     let bilaichhariAreaList = ['bilaichhari bilaichhari'];
//     return (
//         <div className={StyleSheet.area__container}>
//             <div className={StyleSheet.area__container__title}>Area:</div>
//             <div className={StyleSheet.area__container__selected__box}>
//                 <select
//                     onClick={(e) => {
//                         e.target.style.border = '0.13vw solid #da1e37';
//                         e.target.style.backgroundColor = 'white';
//                     }}
//                     style={
//                         areaValue !== 'area'
//                             ? { border: '0.13vw solid #da1e37' }
//                             : { border: 'area', backgroundColor: '#F5F5F5' }
//                     }
//                     name="area"
//                     onChange={(e) => {
//                         areaAction(e.target.value);
//                     }}
//                     value={areaValue}>
//                     <option value="area">Area</option>
//                     {bilaichhariAreaList.map((area, index) => {
//                         return (
//                             <option value={area} key={index}>
//                                 {area}
//                             </option>
//                         );
//                     })}
//                 </select>
//             </div>
//         </div>
//     );
// }
// function BoalkhaliArea() {
//     let boalkhaliAreaList = [
//         'boalkhali charandwip',
//         'boalkhali iqbal park',
//         'boalkhali kadurkhal',
//         'boalkhali kanungopara',
//         'boalkhali sadar',
//         'boalkhali sakpura',
//         'boalkhali saroatoli'
//     ];
//     return (
//         <div className={StyleSheet.area__container}>
//             <div className={StyleSheet.area__container__title}>Area:</div>
//             <div className={StyleSheet.area__container__selected__box}>
//                 <select
//                     onClick={(e) => {
//                         e.target.style.border = '0.13vw solid #da1e37';
//                         e.target.style.backgroundColor = 'white';
//                     }}
//                     style={
//                         areaValue !== 'area'
//                             ? { border: '0.13vw solid #da1e37' }
//                             : { border: 'area', backgroundColor: '#F5F5F5' }
//                     }
//                     name="area"
//                     onChange={(e) => {
//                         areaAction(e.target.value);
//                     }}
//                     value={areaValue}>
//                     <option value="area">Area</option>
//                     {boalkhaliAreaList.map((area, index) => {
//                         return (
//                             <option value={area} key={index}>
//                                 {area}
//                             </option>
//                         );
//                     })}
//                 </select>
//             </div>
//         </div>
//     );
// }
// function BrahmanbariaArea() {
//     let brahmanbariaAreaList = [
//         'akhaura',
//         'akhaura gangasagar',
//         'banchharampur',
//         'bhadughar',
//         'brahmanbaria sadar',
//         'brahmanbaria sadar ashuganj',
//         'brahmanbaria sadar ashuganj share',
//         'brahmanbaria sadar poun',
//         'brahmanbaria sadar talshahar',
//         'gokarna ghat',
//         'hujur bari',
//         'natai',
//         'suhilpur bazar'
//     ];
//     return (
//         <div className={StyleSheet.area__container}>
//             <div className={StyleSheet.area__container__title}>Area:</div>
//             <div className={StyleSheet.area__container__selected__box}>
//                 <select
//                     onClick={(e) => {
//                         e.target.style.border = '0.13vw solid #da1e37';
//                         e.target.style.backgroundColor = 'white';
//                     }}
//                     style={
//                         areaValue !== 'area'
//                             ? { border: '0.13vw solid #da1e37' }
//                             : { border: 'area', backgroundColor: '#F5F5F5' }
//                     }
//                     name="area"
//                     onChange={(e) => {
//                         areaAction(e.target.value);
//                     }}
//                     value={areaValue}>
//                     <option value="area">Area</option>
//                     {brahmanbariaAreaList.map((area, index) => {
//                         return (
//                             <option value={area} key={index}>
//                                 {area}
//                             </option>
//                         );
//                     })}
//                 </select>
//             </div>
//         </div>
//     );
// }
// function BrahmanparaArea() {
//     let brahmanparaAreaList = ['brahmanpara sadar'];
//     return (
//         <div className={StyleSheet.area__container}>
//             <div className={StyleSheet.area__container__title}>Area:</div>
//             <div className={StyleSheet.area__container__selected__box}>
//                 <select
//                     onClick={(e) => {
//                         e.target.style.border = '0.13vw solid #da1e37';
//                         e.target.style.backgroundColor = 'white';
//                     }}
//                     style={
//                         areaValue !== 'area'
//                             ? { border: '0.13vw solid #da1e37' }
//                             : { border: 'area', backgroundColor: '#F5F5F5' }
//                     }
//                     name="area"
//                     onChange={(e) => {
//                         areaAction(e.target.value);
//                     }}
//                     value={areaValue}>
//                     <option value="area">Area</option>
//                     {brahmanparaAreaList.map((area, index) => {
//                         return (
//                             <option value={area} key={index}>
//                                 {area}
//                             </option>
//                         );
//                     })}
//                 </select>
//             </div>
//         </div>
//     );
// }
// function BurichangArea() {
//     let burichangAreaList = ['adbarpur', 'burichang maynamoti bazar', 'burichang sadar'];
//     return (
//         <div className={StyleSheet.area__container}>
//             <div className={StyleSheet.area__container__title}>Area:</div>
//             <div className={StyleSheet.area__container__selected__box}>
//                 <select
//                     onClick={(e) => {
//                         e.target.style.border = '0.13vw solid #da1e37';
//                         e.target.style.backgroundColor = 'white';
//                     }}
//                     style={
//                         areaValue !== 'area'
//                             ? { border: '0.13vw solid #da1e37' }
//                             : { border: 'area', backgroundColor: '#F5F5F5' }
//                     }
//                     name="area"
//                     onChange={(e) => {
//                         areaAction(e.target.value);
//                     }}
//                     value={areaValue}>
//                     <option value="area">Area</option>
//                     {burichangAreaList.map((area, index) => {
//                         return (
//                             <option value={area} key={index}>
//                                 {area}
//                             </option>
//                         );
//                     })}
//                 </select>
//             </div>
//         </div>
//     );
// }
// function ChandinaArea() {
//     let chandinaAreaList = ['chandina chandia', 'chandina madhaiabazar', 'raj kalibari'];
//     return (
//         <div className={StyleSheet.area__container}>
//             <div className={StyleSheet.area__container__title}>Area:</div>
//             <div className={StyleSheet.area__container__selected__box}>
//                 <select
//                     onClick={(e) => {
//                         e.target.style.border = '0.13vw solid #da1e37';
//                         e.target.style.backgroundColor = 'white';
//                     }}
//                     style={
//                         areaValue !== 'area'
//                             ? { border: '0.13vw solid #da1e37' }
//                             : { border: 'area', backgroundColor: '#F5F5F5' }
//                     }
//                     name="area"
//                     onChange={(e) => {
//                         areaAction(e.target.value);
//                     }}
//                     value={areaValue}>
//                     <option value="area">Area</option>
//                     {chandinaAreaList.map((area, index) => {
//                         return (
//                             <option value={area} key={index}>
//                                 {area}
//                             </option>
//                         );
//                     })}
//                 </select>
//             </div>
//         </div>
//     );
// }
// function ChandpurArea() {
//     let chandpurAreaList = [
//         'chandpur sadar',
//         'chandpur sadar baburhat',
//         'chandpur sadar  puranbazar',
//         'chandpur sadar sahatali'
//     ];
//     return (
//         <div className={StyleSheet.area__container}>
//             <div className={StyleSheet.area__container__title}>Area:</div>
//             <div className={StyleSheet.area__container__selected__box}>
//                 <select
//                     onClick={(e) => {
//                         e.target.style.border = '0.13vw solid #da1e37';
//                         e.target.style.backgroundColor = 'white';
//                     }}
//                     style={
//                         areaValue !== 'area'
//                             ? { border: '0.13vw solid #da1e37' }
//                             : { border: 'area', backgroundColor: '#F5F5F5' }
//                     }
//                     name="area"
//                     onChange={(e) => {
//                         areaAction(e.target.value);
//                     }}
//                     value={areaValue}>
//                     <option value="area">Area</option>
//                     {chandpurAreaList.map((area, index) => {
//                         return (
//                             <option value={area} key={index}>
//                                 {area}
//                             </option>
//                         );
//                     })}
//                 </select>
//             </div>
//         </div>
//     );
// }
// function CharAlexganderArea() {
//     let charAlexganderAreaList = [
//         'char alexgander char alexgander',
//         'char alexgander hajirghat',
//         'char alexgander ramgatirhat'
//     ];
//     return (
//         <div className={StyleSheet.area__container}>
//             <div className={StyleSheet.area__container__title}>Area:</div>
//             <div className={StyleSheet.area__container__selected__box}>
//                 <select
//                     onClick={(e) => {
//                         e.target.style.border = '0.13vw solid #da1e37';
//                         e.target.style.backgroundColor = 'white';
//                     }}
//                     style={
//                         areaValue !== 'area'
//                             ? { border: '0.13vw solid #da1e37' }
//                             : { border: 'area', backgroundColor: '#F5F5F5' }
//                     }
//                     name="area"
//                     onChange={(e) => {
//                         areaAction(e.target.value);
//                     }}
//                     value={areaValue}>
//                     <option value="area">Area</option>
//                     {charAlexganderAreaList.map((area, index) => {
//                         return (
//                             <option value={area} key={index}>
//                                 {area}
//                             </option>
//                         );
//                     })}
//                 </select>
//             </div>
//         </div>
//     );
// }
// function ChatkhilArea() {
//     let chatkhilAreaList = [
//         'chatkhil bansa bazar',
//         'chatkhil bodalcourt',
//         'chatkhil dosh gharia',
//         'chatkhil karihati',
//         'chatkhil khilpara',
//         'chatkhil palla',
//         'chatkhil rezzakpur',
//         'chatkhil sadar',
//         'chatkhil sahapur',
//         'chatkhil sampara',
//         'chatkhil shingbahura',
//         'chatkhil solla'
//     ];
//     return (
//         <div className={StyleSheet.area__container}>
//             <div className={StyleSheet.area__container__title}>Area:</div>
//             <div className={StyleSheet.area__container__selected__box}>
//                 <select
//                     onClick={(e) => {
//                         e.target.style.border = '0.13vw solid #da1e37';
//                         e.target.style.backgroundColor = 'white';
//                     }}
//                     style={
//                         areaValue !== 'area'
//                             ? { border: '0.13vw solid #da1e37' }
//                             : { border: 'area', backgroundColor: '#F5F5F5' }
//                     }
//                     name="area"
//                     onChange={(e) => {
//                         areaAction(e.target.value);
//                     }}
//                     value={areaValue}>
//                     <option value="area">Area</option>
//                     {chatkhilAreaList.map((area, index) => {
//                         return (
//                             <option value={area} key={index}>
//                                 {area}
//                             </option>
//                         );
//                     })}
//                 </select>
//             </div>
//         </div>
//     );
// }
// function ChattogramSadarArea() {
//     let chattogramSadarAreaList = [
//         'agrabad',
//         'ak khan',
//         'al-amin baria madra',
//         'al-amin baria madrasa',
//         'amin jute mills',
//         'anandabazar',
//         'bayezid bostami',
//         'chandgaon',
//         'chattogram airport',
//         'chattogram bandar',
//         'chattogram cantonment',
//         'chattogram customs acca',
//         'chattogram gpo',
//         'chattogram new market',
//         'chattogram politechnic institute',
//         'chattogram sailers colony',
//         'chawkbazar',
//         'colonel hat',
//         'combined military hospital ( cmh)',
//         'dakkshin pahartoli',
//         'double mooring',
//         ' processing',
//         'firozshah',
//         'gec',
//         'jaldia marine academy',
//         'khulshi',
//         'kotwali',
//         'middle patenga',
//         'mohard',
//         'nasirabad',
//         'north halishahar',
//         'north kattali',
//         'noyabazar',
//         'oxygen',
//         'pahartoli',
//         'panchlaish',
//         'patenga',
//         'rampura tso',
//         'sadarghat',
//         'south halishahar',
//         'south kattali',
//         'wazedia'
//     ];
//     return (
//         <div className={StyleSheet.area__container}>
//             <div className={StyleSheet.area__container__title}>Area:</div>
//             <div className={StyleSheet.area__container__selected__box}>
//                 <select
//                     onClick={(e) => {
//                         e.target.style.border = '0.13vw solid #da1e37';
//                         e.target.style.backgroundColor = 'white';
//                     }}
//                     style={
//                         areaValue !== 'area'
//                             ? { border: '0.13vw solid #da1e37' }
//                             : { border: 'area', backgroundColor: '#F5F5F5' }
//                     }
//                     name="area"
//                     onChange={(e) => {
//                         areaAction(e.target.value);
//                     }}
//                     value={areaValue}>
//                     <option value="area">Area</option>
//                     {chattogramSadarAreaList.map((area, index) => {
//                         return (
//                             <option value={area} key={index}>
//                                 {area}
//                             </option>
//                         );
//                     })}
//                 </select>
//             </div>
//         </div>
//     );
// }
// function ChhagalnaiaArea() {
//     let chhagalnaiaAreaList = [
//         'chhagalnaia daraga hat',
//         'chhagalnaia maharajganj',
//         'chhagalnaia puabashimulia',
//         'chhagalnaia sadar'
//     ];
//     return (
//         <div className={StyleSheet.area__container}>
//             <div className={StyleSheet.area__container__title}>Area:</div>
//             <div className={StyleSheet.area__container__selected__box}>
//                 <select
//                     onClick={(e) => {
//                         e.target.style.border = '0.13vw solid #da1e37';
//                         e.target.style.backgroundColor = 'white';
//                     }}
//                     style={
//                         areaValue !== 'area'
//                             ? { border: '0.13vw solid #da1e37' }
//                             : { border: 'area', backgroundColor: '#F5F5F5' }
//                     }
//                     name="area"
//                     onChange={(e) => {
//                         areaAction(e.target.value);
//                     }}
//                     value={areaValue}>
//                     <option value="area">Area</option>
//                     {chhagalnaiaAreaList.map((area, index) => {
//                         return (
//                             <option value={area} key={index}>
//                                 {area}
//                             </option>
//                         );
//                     })}
//                 </select>
//             </div>
//         </div>
//     );
// }
// function ChiringgaArea() {
//     let chiringgaAreaList = [
//         'chiringga badarkali',
//         'chiringga chiringga s.o',
//         'chiringga malumghat',
//         'chiringga sadar'
//     ];
//     return (
//         <div className={StyleSheet.area__container}>
//             <div className={StyleSheet.area__container__title}>Area:</div>
//             <div className={StyleSheet.area__container__selected__box}>
//                 <select
//                     onClick={(e) => {
//                         e.target.style.border = '0.13vw solid #da1e37';
//                         e.target.style.backgroundColor = 'white';
//                     }}
//                     style={
//                         areaValue !== 'area'
//                             ? { border: '0.13vw solid #da1e37' }
//                             : { border: 'area', backgroundColor: '#F5F5F5' }
//                     }
//                     name="area"
//                     onChange={(e) => {
//                         areaAction(e.target.value);
//                     }}
//                     value={areaValue}>
//                     <option value="area">Area</option>
//                     {chiringgaAreaList.map((area, index) => {
//                         return (
//                             <option value={area} key={index}>
//                                 {area}
//                             </option>
//                         );
//                     })}
//                 </select>
//             </div>
//         </div>
//     );
// }
// function ChouddagramArea() {
//     let chouddagramAreaList = [
//         'chouddagram area',
//         'chouddagram batisa',
//         'chouddagram chiora',
//         'chouddagram chouddagram'
//     ];
//     return (
//         <div className={StyleSheet.area__container}>
//             <div className={StyleSheet.area__container__title}>Area:</div>
//             <div className={StyleSheet.area__container__selected__box}>
//                 <select
//                     onClick={(e) => {
//                         e.target.style.border = '0.13vw solid #da1e37';
//                         e.target.style.backgroundColor = 'white';
//                     }}
//                     style={
//                         areaValue !== 'area'
//                             ? { border: '0.13vw solid #da1e37' }
//                             : { border: 'area', backgroundColor: '#F5F5F5' }
//                     }
//                     name="area"
//                     onChange={(e) => {
//                         areaAction(e.target.value);
//                     }}
//                     value={areaValue}>
//                     <option value="area">Area</option>
//                     {chouddagramAreaList.map((area, index) => {
//                         return (
//                             <option value={area} key={index}>
//                                 {area}
//                             </option>
//                         );
//                     })}
//                 </select>
//             </div>
//         </div>
//     );
// }
// function ComillaArea() {
//     let comillaAreaList = [
//         'boro para',
//         'comilla housing',
//         'comilla sadar',
//         'comilla sadar comilla contonment',
//         'comilla sadar courtbari',
//         'comilla sadar halimanagar',
//         'comilla sadar suaganj',
//         'dharmopur',
//         'kandirpar',
//         'kaptan bazar',
//         'paduar bazar',
//         'shashongachha',
//         'tomsom bridge'
//     ];

//     return (
//         <div className={StyleSheet.area__container}>
//             <div className={StyleSheet.area__container__title}>Area:</div>
//             <div className={StyleSheet.area__container__selected__box}>
//                 <select
//                     onClick={(e) => {
//                         e.target.style.border = '0.13vw solid #da1e37';
//                         e.target.style.backgroundColor = 'white';
//                     }}
//                     style={
//                         areaValue !== 'area'
//                             ? { border: '0.13vw solid #da1e37' }
//                             : { border: 'area', backgroundColor: '#F5F5F5' }
//                     }
//                     name="area"
//                     onChange={(e) => {
//                         areaAction(e.target.value);
//                     }}
//                     value={areaValue}>
//                     <option value="area">Area</option>
//                     {comillaAreaList.map((area, index) => {
//                         return (
//                             <option value={area} key={index}>
//                                 {area}
//                             </option>
//                         );
//                     })}
//                 </select>
//             </div>
//         </div>
//     );
// }
// function CoxsBazarArea() {
//     let coxsBazarAreaList = [
//         'baharchora',
//         'bazarghata',
//         "cox's bazar bus terminal",
//         'holiday mor',
//         'kolatoly',
//         'laldighi pa',
//         'link road'
//     ];
//     return (
//         <div className={StyleSheet.area__container}>
//             <div className={StyleSheet.area__container__title}>Area:</div>
//             <div className={StyleSheet.area__container__selected__box}>
//                 <select
//                     onClick={(e) => {
//                         e.target.style.border = '0.13vw solid #da1e37';
//                         e.target.style.backgroundColor = 'white';
//                     }}
//                     style={
//                         areaValue !== 'area'
//                             ? { border: '0.13vw solid #da1e37' }
//                             : { border: 'area', backgroundColor: '#F5F5F5' }
//                     }
//                     name="area"
//                     onChange={(e) => {
//                         areaAction(e.target.value);
//                     }}
//                     value={areaValue}>
//                     <option value="area">Area</option>
//                     {coxsBazarAreaList.map((area, index) => {
//                         return (
//                             <option value={area} key={index}>
//                                 {area}
//                             </option>
//                         );
//                     })}
//                 </select>
//             </div>
//         </div>
//     );
// }
// function DagonbhuiaArea() {
//     let dagonbhuiaAreaList = [
//         'dagonbhuia chhilonia',
//         'dagonbhuia dagondhuia',
//         'dagonbhuia dudmukha',
//         'dagonbhuia rajapur'
//     ];
//     return (
//         <div className={StyleSheet.area__container}>
//             <div className={StyleSheet.area__container__title}>Area:</div>
//             <div className={StyleSheet.area__container__selected__box}>
//                 <select
//                     onClick={(e) => {
//                         e.target.style.border = '0.13vw solid #da1e37';
//                         e.target.style.backgroundColor = 'white';
//                     }}
//                     style={
//                         areaValue !== 'area'
//                             ? { border: '0.13vw solid #da1e37' }
//                             : { border: 'area', backgroundColor: '#F5F5F5' }
//                     }
//                     name="area"
//                     onChange={(e) => {
//                         areaAction(e.target.value);
//                     }}
//                     value={areaValue}>
//                     <option value="area">Area</option>
//                     {dagonbhuiaAreaList.map((area, index) => {
//                         return (
//                             <option value={area} key={index}>
//                                 {area}
//                             </option>
//                         );
//                     })}
//                 </select>
//             </div>
//         </div>
//     );
// }
// function DaudkandiArea() {
//     let daudkandiAreaList = [
//         'daudkandi dashpara',
//         'daudkandi daudkandi',
//         'daudkandi eliotganj',
//         'daudkandi gouripur'
//     ];
//     return (
//         <div className={StyleSheet.area__container}>
//             <div className={StyleSheet.area__container__title}>Area:</div>
//             <div className={StyleSheet.area__container__selected__box}>
//                 <select
//                     onClick={(e) => {
//                         e.target.style.border = '0.13vw solid #da1e37';
//                         e.target.style.backgroundColor = 'white';
//                     }}
//                     style={
//                         areaValue !== 'area'
//                             ? { border: '0.13vw solid #da1e37' }
//                             : { border: 'area', backgroundColor: '#F5F5F5' }
//                     }
//                     name="area"
//                     onChange={(e) => {
//                         areaAction(e.target.value);
//                     }}
//                     value={areaValue}>
//                     <option value="area">Area</option>
//                     {daudkandiAreaList.map((area, index) => {
//                         return (
//                             <option value={area} key={index}>
//                                 {area}
//                             </option>
//                         );
//                     })}
//                 </select>
//             </div>
//         </div>
//     );
// }
// function DavidharArea() {
//     let davidharAreaList = [
//         'davidhar barashalghar',
//         'davidhar davidhar',
//         'davidhar dhamtee',
//         'davidhar gangamandal'
//     ];
//     return (
//         <div className={StyleSheet.area__container}>
//             <div className={StyleSheet.area__container__title}>Area:</div>
//             <div className={StyleSheet.area__container__selected__box}>
//                 <select
//                     onClick={(e) => {
//                         e.target.style.border = '0.13vw solid #da1e37';
//                         e.target.style.backgroundColor = 'white';
//                     }}
//                     style={
//                         areaValue !== 'area'
//                             ? { border: '0.13vw solid #da1e37' }
//                             : { border: 'area', backgroundColor: '#F5F5F5' }
//                     }
//                     name="area"
//                     onChange={(e) => {
//                         areaAction(e.target.value);
//                     }}
//                     value={areaValue}>
//                     <option value="area">Area</option>
//                     {davidharAreaList.map((area, index) => {
//                         return (
//                             <option value={area} key={index}>
//                                 {area}
//                             </option>
//                         );
//                     })}
//                 </select>
//             </div>
//         </div>
//     );
// }
// function DiginalaArea() {
//     let diginalaAreaList = ['diginala sadar'];
//     return (
//         <div className={StyleSheet.area__container}>
//             <div className={StyleSheet.area__container__title}>Area:</div>
//             <div className={StyleSheet.area__container__selected__box}>
//                 <select
//                     onClick={(e) => {
//                         e.target.style.border = '0.13vw solid #da1e37';
//                         e.target.style.backgroundColor = 'white';
//                     }}
//                     style={
//                         areaValue !== 'area'
//                             ? { border: '0.13vw solid #da1e37' }
//                             : { border: 'area', backgroundColor: '#F5F5F5' }
//                     }
//                     name="area"
//                     onChange={(e) => {
//                         areaAction(e.target.value);
//                     }}
//                     value={areaValue}>
//                     <option value="area">Area</option>
//                     {diginalaAreaList.map((area, index) => {
//                         return (
//                             <option value={area} key={index}>
//                                 {area}
//                             </option>
//                         );
//                     })}
//                 </select>
//             </div>
//         </div>
//     );
// }
// function EastJoaraArea() {
//     let eastJoaraAreaList = [
//         'east joara barma',
//         'east joara dohazari',
//         'east joara east joara',
//         'east joara gachbaria'
//     ];
//     return (
//         <div className={StyleSheet.area__container}>
//             <div className={StyleSheet.area__container__title}>Area:</div>
//             <div className={StyleSheet.area__container__selected__box}>
//                 <select
//                     onClick={(e) => {
//                         e.target.style.border = '0.13vw solid #da1e37';
//                         e.target.style.backgroundColor = 'white';
//                     }}
//                     style={
//                         areaValue !== 'area'
//                             ? { border: '0.13vw solid #da1e37' }
//                             : { border: 'area', backgroundColor: '#F5F5F5' }
//                     }
//                     name="area"
//                     onChange={(e) => {
//                         areaAction(e.target.value);
//                     }}
//                     value={areaValue}>
//                     <option value="area">Area</option>
//                     {eastJoaraAreaList.map((area, index) => {
//                         return (
//                             <option value={area} key={index}>
//                                 {area}
//                             </option>
//                         );
//                     })}
//                 </select>
//             </div>
//         </div>
//     );
// }
// function FaridganjArea() {
//     let faridganjAreaList = [
//         'faridganj chandra',
//         'faridganj gridkaliandia',
//         'faridganj islampur shah isain',
//         'faridganj rampurbazar',
//         'faridganj rupsha',
//         'faridganj sadar'
//     ];
//     return (
//         <div className={StyleSheet.area__container}>
//             <div className={StyleSheet.area__container__title}>Area:</div>
//             <div className={StyleSheet.area__container__selected__box}>
//                 <select
//                     onClick={(e) => {
//                         e.target.style.border = '0.13vw solid #da1e37';
//                         e.target.style.backgroundColor = 'white';
//                     }}
//                     style={
//                         areaValue !== 'area'
//                             ? { border: '0.13vw solid #da1e37' }
//                             : { border: 'area', backgroundColor: '#F5F5F5' }
//                     }
//                     name="area"
//                     onChange={(e) => {
//                         areaAction(e.target.value);
//                     }}
//                     value={areaValue}>
//                     <option value="area">Area</option>
//                     {faridganjAreaList.map((area, index) => {
//                         return (
//                             <option value={area} key={index}>
//                                 {area}
//                             </option>
//                         );
//                     })}
//                 </select>
//             </div>
//         </div>
//     );
// }
// function FatikchhariArea() {
//     let fatikchhariAreaList = [
//         'fatikchhari area',
//         'fatikchhari bhandar sharif',
//         'fatikchhari fatikchhari',
//         'fatikchhari harualchhari',
//         'fatikchhari najirhat',
//         'fatikchhari nanupur',
//         'fatikchhari narayanhat'
//     ];
//     return (
//         <div className={StyleSheet.area__container}>
//             <div className={StyleSheet.area__container__title}>Area:</div>
//             <div className={StyleSheet.area__container__selected__box}>
//                 <select
//                     onClick={(e) => {
//                         e.target.style.border = '0.13vw solid #da1e37';
//                         e.target.style.backgroundColor = 'white';
//                     }}
//                     style={
//                         areaValue !== 'area'
//                             ? { border: '0.13vw solid #da1e37' }
//                             : { border: 'area', backgroundColor: '#F5F5F5' }
//                     }
//                     name="area"
//                     onChange={(e) => {
//                         areaAction(e.target.value);
//                     }}
//                     value={areaValue}>
//                     <option value="area">Area</option>
//                     {fatikchhariAreaList.map((area, index) => {
//                         return (
//                             <option value={area} key={index}>
//                                 {area}
//                             </option>
//                         );
//                     })}
//                 </select>
//             </div>
//         </div>
//     );
// }
// function FeniArea() {
//     let feniAreaList = [
//         'bhanga takia bazar sharshadie',
//         'cadet college',
//         'court buliding',
//         'daud pul',
//         'feni circuit house',
//         'feni police line',
//         'feni polytechnic institute',
//         'feni sadar',
//         'feni sadar fazilpur',
//         'feni sadar hospital',
//         'feni sadar laskarhat',
//         'feni stadium',
//         'feni university',
//         'grand trunk road',
//         'grand trunk road squre',
//         'hazir bazar post office sharshadie',
//         'ja academy',
//         'kalidaha - laskarhat rd',
//         'khaiyara the head',
//         'lalpur',
//         'laskarhat post office',
//         'laskar hat s c laha institution',
//         'mastar para',
//         'mohipal',
//         'panchgachia bazar',
//         'petro bangla',
//         'pirganj laldigi',
//         'rampur',
//         'ranir hat',
//         'santi company road',
//         'shodeb pur',
//         'shohid selina parvin road',
//         'tewmuhuni bazar',
//         'ukil para'
//     ];
//     return (
//         <div className={StyleSheet.area__container}>
//             <div className={StyleSheet.area__container__title}>Area:</div>
//             <div className={StyleSheet.area__container__selected__box}>
//                 <select
//                     onClick={(e) => {
//                         e.target.style.border = '0.13vw solid #da1e37';
//                         e.target.style.backgroundColor = 'white';
//                     }}
//                     style={
//                         areaValue !== 'area'
//                             ? { border: '0.13vw solid #da1e37' }
//                             : { border: 'area', backgroundColor: '#F5F5F5' }
//                     }
//                     name="area"
//                     onChange={(e) => {
//                         areaAction(e.target.value);
//                     }}
//                     value={areaValue}>
//                     <option value="area">Area</option>
//                     {feniAreaList.map((area, index) => {
//                         return (
//                             <option value={area} key={index}>
//                                 {area}
//                             </option>
//                         );
//                     })}
//                 </select>
//             </div>
//         </div>
//     );
// }
// function GorakghatArea() {
//     let gorakghatAreaList = ['gorakghat gorakghat'];
//     return (
//         <div className={StyleSheet.area__container}>
//             <div className={StyleSheet.area__container__title}>Area:</div>
//             <div className={StyleSheet.area__container__selected__box}>
//                 <select
//                     onClick={(e) => {
//                         e.target.style.border = '0.13vw solid #da1e37';
//                         e.target.style.backgroundColor = 'white';
//                     }}
//                     style={
//                         areaValue !== 'area'
//                             ? { border: '0.13vw solid #da1e37' }
//                             : { border: 'area', backgroundColor: '#F5F5F5' }
//                     }
//                     name="area"
//                     onChange={(e) => {
//                         areaAction(e.target.value);
//                     }}
//                     value={areaValue}>
//                     <option value="area">Area</option>
//                     {gorakghatAreaList.map((area, index) => {
//                         return (
//                             <option value={area} key={index}>
//                                 {area}
//                             </option>
//                         );
//                     })}
//                 </select>
//             </div>
//         </div>
//     );
// }
// function HajiganjArea() {
//     let hajiganjAreaList = ['hajiganj bolakhal', 'hajiganj hajiganj'];
//     return (
//         <div className={StyleSheet.area__container}>
//             <div className={StyleSheet.area__container__title}>Area:</div>
//             <div className={StyleSheet.area__container__selected__box}>
//                 <select
//                     onClick={(e) => {
//                         e.target.style.border = '0.13vw solid #da1e37';
//                         e.target.style.backgroundColor = 'white';
//                     }}
//                     style={
//                         areaValue !== 'area'
//                             ? { border: '0.13vw solid #da1e37' }
//                             : { border: 'area', backgroundColor: '#F5F5F5' }
//                     }
//                     name="area"
//                     onChange={(e) => {
//                         areaAction(e.target.value);
//                     }}
//                     value={areaValue}>
//                     <option value="area">Area</option>
//                     {hajiganjAreaList.map((area, index) => {
//                         return (
//                             <option value={area} key={index}>
//                                 {area}
//                             </option>
//                         );
//                     })}
//                 </select>
//             </div>
//         </div>
//     );
// }
// function HathazariArea() {
//     let hathazariAreaList = [
//         'Hathazari Chitt.University',
//         'Hathazari Fatahabad',
//         'Hathazari Gorduara',
//         'Hathazari Hathazari',
//         'Hathazari Katirhat',
//         'Hathazari Madrasa',
//         'Hathazari Mirzapur',
//         'Hathazari Nuralibari',
//         'Hathazari Yunus Nagar'
//     ];
//     return (
//         <div className={StyleSheet.area__container}>
//             <div className={StyleSheet.area__container__title}>Area:</div>
//             <div className={StyleSheet.area__container__selected__box}>
//                 <select
//                     onClick={(e) => {
//                         e.target.style.border = '0.13vw solid #da1e37';
//                         e.target.style.backgroundColor = 'white';
//                     }}
//                     style={
//                         areaValue !== 'area'
//                             ? { border: '0.13vw solid #da1e37' }
//                             : { border: 'area', backgroundColor: '#F5F5F5' }
//                     }
//                     name="area"
//                     onChange={(e) => {
//                         areaAction(e.target.value);
//                     }}
//                     value={areaValue}>
//                     <option value="area">Area</option>
//                     {hathazariAreaList.map((area, index) => {
//                         return (
//                             <option value={area} key={index}>
//                                 {area}
//                             </option>
//                         );
//                     })}
//                 </select>
//             </div>
//         </div>
//     );
// }
// function HatiyaArea() {
//     let hatiyaAreaList = ['hatiya afazia', 'hatiya sadar', 'hatiya tamoraddi'];
//     return (
//         <div className={StyleSheet.area__container}>
//             <div className={StyleSheet.area__container__title}>Area:</div>
//             <div className={StyleSheet.area__container__selected__box}>
//                 <select
//                     onClick={(e) => {
//                         e.target.style.border = '0.13vw solid #da1e37';
//                         e.target.style.backgroundColor = 'white';
//                     }}
//                     style={
//                         areaValue !== 'area'
//                             ? { border: '0.13vw solid #da1e37' }
//                             : { border: 'area', backgroundColor: '#F5F5F5' }
//                     }
//                     name="area"
//                     onChange={(e) => {
//                         areaAction(e.target.value);
//                     }}
//                     value={areaValue}>
//                     <option value="area">Area</option>
//                     {hatiyaAreaList.map((area, index) => {
//                         return (
//                             <option value={area} key={index}>
//                                 {area}
//                             </option>
//                         );
//                     })}
//                 </select>
//             </div>
//         </div>
//     );
// }
// function HayemcharArea() {
//     let hayemcharAreaList = ['hayemchar gandmara', 'hayemchar sadar'];
//     return (
//         <div className={StyleSheet.area__container}>
//             <div className={StyleSheet.area__container__title}>Area:</div>
//             <div className={StyleSheet.area__container__selected__box}>
//                 <select
//                     onClick={(e) => {
//                         e.target.style.border = '0.13vw solid #da1e37';
//                         e.target.style.backgroundColor = 'white';
//                     }}
//                     style={
//                         areaValue !== 'area'
//                             ? { border: '0.13vw solid #da1e37' }
//                             : { border: 'area', backgroundColor: '#F5F5F5' }
//                     }
//                     name="area"
//                     onChange={(e) => {
//                         areaAction(e.target.value);
//                     }}
//                     value={areaValue}>
//                     <option value="area">Area</option>
//                     {hayemcharAreaList.map((area, index) => {
//                         return (
//                             <option value={area} key={index}>
//                                 {area}
//                             </option>
//                         );
//                     })}
//                 </select>
//             </div>
//         </div>
//     );
// }
// function HomnaArea() {
//     let homnaAreaList = ['Akhandapur', 'Homna Homna', 'Hujurkandi', 'Mohonpur'];
//     return (
//         <div className={StyleSheet.area__container}>
//             <div className={StyleSheet.area__container__title}>Area:</div>
//             <div className={StyleSheet.area__container__selected__box}>
//                 <select
//                     onClick={(e) => {
//                         e.target.style.border = '0.13vw solid #da1e37';
//                         e.target.style.backgroundColor = 'white';
//                     }}
//                     style={
//                         areaValue !== 'area'
//                             ? { border: '0.13vw solid #da1e37' }
//                             : { border: 'area', backgroundColor: '#F5F5F5' }
//                     }
//                     name="area"
//                     onChange={(e) => {
//                         areaAction(e.target.value);
//                     }}
//                     value={areaValue}>
//                     <option value="area">Area</option>
//                     {homnaAreaList.map((area, index) => {
//                         return (
//                             <option value={area} key={index}>
//                                 {area}
//                             </option>
//                         );
//                     })}
//                 </select>
//             </div>
//         </div>
//     );
// }
// function JaldiArea() {
//     let jaldiAreaList = [
//         'Jaldi Banigram',
//         'Jaldi Gunagari',
//         'Jaldi Khan Bahadur',
//         'Jaldi Sadar'
//     ];
//     return (
//         <div className={StyleSheet.area__container}>
//             <div className={StyleSheet.area__container__title}>Area:</div>
//             <div className={StyleSheet.area__container__selected__box}>
//                 <select
//                     onClick={(e) => {
//                         e.target.style.border = '0.13vw solid #da1e37';
//                         e.target.style.backgroundColor = 'white';
//                     }}
//                     style={
//                         areaValue !== 'area'
//                             ? { border: '0.13vw solid #da1e37' }
//                             : { border: 'area', backgroundColor: '#F5F5F5' }
//                     }
//                     name="area"
//                     onChange={(e) => {
//                         areaAction(e.target.value);
//                     }}
//                     value={areaValue}>
//                     <option value="area">Area</option>
//                     {jaldiAreaList.map((area, index) => {
//                         return (
//                             <option value={area} key={index}>
//                                 {area}
//                             </option>
//                         );
//                     })}
//                 </select>
//             </div>
//         </div>
//     );
// }
// function JarachhariArea() {
//     let jarachhariAreaList = ['jarachhari jarachhari'];
//     return (
//         <div className={StyleSheet.area__container}>
//             <div className={StyleSheet.area__container__title}>Area:</div>
//             <div className={StyleSheet.area__container__selected__box}>
//                 <select
//                     onClick={(e) => {
//                         e.target.style.border = '0.13vw solid #da1e37';
//                         e.target.style.backgroundColor = 'white';
//                     }}
//                     style={
//                         areaValue !== 'area'
//                             ? { border: '0.13vw solid #da1e37' }
//                             : { border: 'area', backgroundColor: '#F5F5F5' }
//                     }
//                     name="area"
//                     onChange={(e) => {
//                         areaAction(e.target.value);
//                     }}
//                     value={areaValue}>
//                     <option value="area">Area</option>
//                     {jarachhariAreaList.map((area, index) => {
//                         return (
//                             <option value={area} key={index}>
//                                 {area}
//                             </option>
//                         );
//                     })}
//                 </select>
//             </div>
//         </div>
//     );
// }
// function KachuaArea() {
//     let kachuaAreaList = [
//         'Kachua Pak Shrirampur',
//         'Kachua Rahima Nagar',
//         'Kachua Sadar',
//         'Kachua Shachar'
//     ];
//     return (
//         <div className={StyleSheet.area__container}>
//             <div className={StyleSheet.area__container__title}>Area:</div>
//             <div className={StyleSheet.area__container__selected__box}>
//                 <select
//                     onClick={(e) => {
//                         e.target.style.border = '0.13vw solid #da1e37';
//                         e.target.style.backgroundColor = 'white';
//                     }}
//                     style={
//                         areaValue !== 'area'
//                             ? { border: '0.13vw solid #da1e37' }
//                             : { border: 'area', backgroundColor: '#F5F5F5' }
//                     }
//                     name="area"
//                     onChange={(e) => {
//                         areaAction(e.target.value);
//                     }}
//                     value={areaValue}>
//                     <option value="area">Area</option>
//                     {kachuaAreaList.map((area, index) => {
//                         return (
//                             <option value={area} key={index}>
//                                 {area}
//                             </option>
//                         );
//                     })}
//                 </select>
//             </div>
//         </div>
//     );
// }
// function KalampatiArea() {
//     let kalampatiAreaList = ['kalampati betbunia', 'kalampati kalampati'];
//     return (
//         <div className={StyleSheet.area__container}>
//             <div className={StyleSheet.area__container__title}>Area:</div>
//             <div className={StyleSheet.area__container__selected__box}>
//                 <select
//                     onClick={(e) => {
//                         e.target.style.border = '0.13vw solid #da1e37';
//                         e.target.style.backgroundColor = 'white';
//                     }}
//                     style={
//                         areaValue !== 'area'
//                             ? { border: '0.13vw solid #da1e37' }
//                             : { border: 'area', backgroundColor: '#F5F5F5' }
//                     }
//                     name="area"
//                     onChange={(e) => {
//                         areaAction(e.target.value);
//                     }}
//                     value={areaValue}>
//                     <option value="area">Area</option>
//                     {kalampatiAreaList.map((area, index) => {
//                         return (
//                             <option value={area} key={index}>
//                                 {area}
//                             </option>
//                         );
//                     })}
//                 </select>
//             </div>
//         </div>
//     );
// }
// function KaptaiArea() {
//     let kaptaiAreaList = [
//         'Kaptai Chandraghona',
//         'Kaptai Kaptai Project',
//         'Kaptai Nuton Bazar',
//         'Kaptai Sadar'
//     ];
//     return (
//         <div className={StyleSheet.area__container}>
//             <div className={StyleSheet.area__container__title}>Area:</div>
//             <div className={StyleSheet.area__container__selected__box}>
//                 <select
//                     onClick={(e) => {
//                         e.target.style.border = '0.13vw solid #da1e37';
//                         e.target.style.backgroundColor = 'white';
//                     }}
//                     style={
//                         areaValue !== 'area'
//                             ? { border: '0.13vw solid #da1e37' }
//                             : { border: 'area', backgroundColor: '#F5F5F5' }
//                     }
//                     name="area"
//                     onChange={(e) => {
//                         areaAction(e.target.value);
//                     }}
//                     value={areaValue}>
//                     <option value="area">Area</option>
//                     {kaptaiAreaList.map((area, index) => {
//                         return (
//                             <option value={area} key={index}>
//                                 {area}
//                             </option>
//                         );
//                     })}
//                 </select>
//             </div>
//         </div>
//     );
// }
// function KasbaArea() {
//     let kasbaAreaList = [
//         'Kasba Chandidar',
//         'Kasba Chargachh',
//         'Kasba Gopinathpur',
//         'Kasba Kuti',
//         'Kasba Sadar'
//     ];
//     return (
//         <div className={StyleSheet.area__container}>
//             <div className={StyleSheet.area__container__title}>Area:</div>
//             <div className={StyleSheet.area__container__selected__box}>
//                 <select
//                     onClick={(e) => {
//                         e.target.style.border = '0.13vw solid #da1e37';
//                         e.target.style.backgroundColor = 'white';
//                     }}
//                     style={
//                         areaValue !== 'area'
//                             ? { border: '0.13vw solid #da1e37' }
//                             : { border: 'area', backgroundColor: '#F5F5F5' }
//                     }
//                     name="area"
//                     onChange={(e) => {
//                         areaAction(e.target.value);
//                     }}
//                     value={areaValue}>
//                     <option value="area">Area</option>
//                     {kasbaAreaList.map((area, index) => {
//                         return (
//                             <option value={area} key={index}>
//                                 {area}
//                             </option>
//                         );
//                     })}
//                 </select>
//             </div>
//         </div>
//     );
// }
// function KhagrachariArea() {
//     let khagrachariAreaList = ['khagrachari sadar'];
//     return (
//         <div className={StyleSheet.area__container}>
//             <div className={StyleSheet.area__container__title}>Area:</div>
//             <div className={StyleSheet.area__container__selected__box}>
//                 <select
//                     onClick={(e) => {
//                         e.target.style.border = '0.13vw solid #da1e37';
//                         e.target.style.backgroundColor = 'white';
//                     }}
//                     style={
//                         areaValue !== 'area'
//                             ? { border: '0.13vw solid #da1e37' }
//                             : { border: 'area', backgroundColor: '#F5F5F5' }
//                     }
//                     name="area"
//                     onChange={(e) => {
//                         areaAction(e.target.value);
//                     }}
//                     value={areaValue}>
//                     <option value="area">Area</option>

//                     {khagrachariAreaList.map((area, index) => {
//                         return (
//                             <option value={area} key={index}>
//                                 {area}
//                             </option>
//                         );
//                     })}
//                 </select>
//             </div>
//         </div>
//     );
// }
// function KutubdiaArea() {
//     let KutubdiaAreaList = ['kutubdia sadar'];
//     return (
//         <div className={StyleSheet.area__container}>
//             <div className={StyleSheet.area__container__title}>Area:</div>
//             <div className={StyleSheet.area__container__selected__box}>
//                 <select
//                     onClick={(e) => {
//                         e.target.style.border = '0.13vw solid #da1e37';
//                         e.target.style.backgroundColor = 'white';
//                     }}
//                     style={
//                         areaValue !== 'area'
//                             ? { border: '0.13vw solid #da1e37' }
//                             : { border: 'area', backgroundColor: '#F5F5F5' }
//                     }
//                     name="area"
//                     onChange={(e) => {
//                         areaAction(e.target.value);
//                     }}
//                     value={areaValue}>
//                     <option value="area">Area</option>
//                     {KutubdiaAreaList.map((area, index) => {
//                         return (
//                             <option value={area} key={index}>
//                                 {area}
//                             </option>
//                         );
//                     })}
//                 </select>
//             </div>
//         </div>
//     );
// }
// function LaksamArea() {
//     let laksamAreaList = [
//         'Lakshmipur Sadar',
//         'Lakshmipur Sadar Amani Lakshimpur',
//         'Lakshmipur Sadar Bhabaniganj',
//         'Lakshmipur Sadar Chandraganj',
//         'Lakshmipur Sadar Choupalli',
//         'Lakshmipur Sadar Dalal Bazar',
//         'Lakshmipur Sadar Duttapar',
//         'Lakshmipur Sadar Keramatganj',
//         'Lakshmipur Sadar Mandari',
//         'Lakshmipur Sadar Rupchara'
//     ];
//     return (
//         <div className={StyleSheet.area__container}>
//             <div className={StyleSheet.area__container__title}>Area:</div>
//             <div className={StyleSheet.area__container__selected__box}>
//                 <select
//                     onClick={(e) => {
//                         e.target.style.border = '0.13vw solid #da1e37';
//                         e.target.style.backgroundColor = 'white';
//                     }}
//                     style={
//                         areaValue !== 'area'
//                             ? { border: '0.13vw solid #da1e37' }
//                             : { border: 'area', backgroundColor: '#F5F5F5' }
//                     }
//                     name="area"
//                     onChange={(e) => {
//                         areaAction(e.target.value);
//                     }}
//                     value={areaValue}>
//                     <option value="area">Area</option>
//                     {laksamAreaList.map((area, index) => {
//                         return (
//                             <option value={area} key={index}>
//                                 {area}
//                             </option>
//                         );
//                     })}
//                 </select>
//             </div>
//         </div>
//     );
// }
// function LakshmipurArea() {
//     let lakshmipurAreaList = [
//         'Langalkot Chhariabazar',
//         'Langalkot Dhalua',
//         'Langalkot Gunabati',
//         'Langalkot Langalkot'
//     ];
//     return (
//         <div className={StyleSheet.area__container}>
//             <div className={StyleSheet.area__container__title}>Area:</div>
//             <div className={StyleSheet.area__container__selected__box}>
//                 <select
//                     onClick={(e) => {
//                         e.target.style.border = '0.13vw solid #da1e37';
//                         e.target.style.backgroundColor = 'white';
//                     }}
//                     style={
//                         areaValue !== 'area'
//                             ? { border: '0.13vw solid #da1e37' }
//                             : { border: 'area', backgroundColor: '#F5F5F5' }
//                     }
//                     name="area"
//                     onChange={(e) => {
//                         areaAction(e.target.value);
//                     }}
//                     value={areaValue}>
//                     <option value="area">Area</option>
//                     {lakshmipurAreaList.map((area, index) => {
//                         return (
//                             <option value={area} key={index}>
//                                 {area}
//                             </option>
//                         );
//                     })}
//                 </select>
//             </div>
//         </div>
//     );
// }
// function LangalkotArea() {
//     let langalkotAreaList = ['laxmichhari sadar'];
//     return (
//         <div className={StyleSheet.area__container}>
//             <div className={StyleSheet.area__container__title}>Area:</div>
//             <div className={StyleSheet.area__container__selected__box}>
//                 <select
//                     onClick={(e) => {
//                         e.target.style.border = '0.13vw solid #da1e37';
//                         e.target.style.backgroundColor = 'white';
//                     }}
//                     style={
//                         areaValue !== 'area'
//                             ? { border: '0.13vw solid #da1e37' }
//                             : { border: 'area', backgroundColor: '#F5F5F5' }
//                     }
//                     name="area"
//                     onChange={(e) => {
//                         areaAction(e.target.value);
//                     }}
//                     value={areaValue}>
//                     <option value="area">Area</option>
//                     {langalkotAreaList.map((area, index) => {
//                         return (
//                             <option value={area} key={index}>
//                                 {area}
//                             </option>
//                         );
//                     })}
//                 </select>
//             </div>
//         </div>
//     );
// }
// function LaxmichhariArea() {
//     let laxmichhariAreaList = ['Lohagara Chunti', 'Lohagara Lohagara', 'Lohagara Padua'];
//     return (
//         <div className={StyleSheet.area__container}>
//             <div className={StyleSheet.area__container__title}>Area:</div>
//             <div className={StyleSheet.area__container__selected__box}>
//                 <select
//                     onClick={(e) => {
//                         e.target.style.border = '0.13vw solid #da1e37';
//                         e.target.style.backgroundColor = 'white';
//                     }}
//                     style={
//                         areaValue !== 'area'
//                             ? { border: '0.13vw solid #da1e37' }
//                             : { border: 'area', backgroundColor: '#F5F5F5' }
//                     }
//                     name="area"
//                     onChange={(e) => {
//                         areaAction(e.target.value);
//                     }}
//                     value={areaValue}>
//                     <option value="area">Area</option>
//                     {laxmichhariAreaList.map((area, index) => {
//                         return (
//                             <option value={area} key={index}>
//                                 {area}
//                             </option>
//                         );
//                     })}
//                 </select>
//             </div>
//         </div>
//     );
// }
// function LohagaraArea() {
//     let lohagaraAreaList = ['longachh sadar'];
//     return (
//         <div className={StyleSheet.area__container}>
//             <div className={StyleSheet.area__container__title}>Area:</div>
//             <div className={StyleSheet.area__container__selected__box}>
//                 <select
//                     onClick={(e) => {
//                         e.target.style.border = '0.13vw solid #da1e37';
//                         e.target.style.backgroundColor = 'white';
//                     }}
//                     style={
//                         areaValue !== 'area'
//                             ? { border: '0.13vw solid #da1e37' }
//                             : { border: 'area', backgroundColor: '#F5F5F5' }
//                     }
//                     name="area"
//                     onChange={(e) => {
//                         areaAction(e.target.value);
//                     }}
//                     value={areaValue}>
//                     <option value="area">Area</option>
//                     {lohagaraAreaList.map((area, index) => {
//                         return (
//                             <option value={area} key={index}>
//                                 {area}
//                             </option>
//                         );
//                     })}
//                 </select>
//             </div>
//         </div>
//     );
// }
// function LongachhArea() {
//     let longachhAreaList = ['manikchhari sadar'];
//     return (
//         <div className={StyleSheet.area__container}>
//             <div className={StyleSheet.area__container__title}>Area:</div>
//             <div className={StyleSheet.area__container__selected__box}>
//                 <select
//                     onClick={(e) => {
//                         e.target.style.border = '0.13vw solid #da1e37';
//                         e.target.style.backgroundColor = 'white';
//                     }}
//                     style={
//                         areaValue !== 'area'
//                             ? { border: '0.13vw solid #da1e37' }
//                             : { border: 'area', backgroundColor: '#F5F5F5' }
//                     }
//                     name="area"
//                     onChange={(e) => {
//                         areaAction(e.target.value);
//                     }}
//                     value={areaValue}>
//                     <option value="area">Area</option>
//                     {longachhAreaList.map((area, index) => {
//                         return (
//                             <option value={area} key={index}>
//                                 {area}
//                             </option>
//                         );
//                     })}
//                 </select>
//             </div>
//         </div>
//     );
// }
// function ManikchhariArea() {
//     let manikchhariAreaList = ['manikchhari sadar'];
//     return (
//         <div className={StyleSheet.area__container}>
//             <div className={StyleSheet.area__container__title}>Area:</div>
//             <div className={StyleSheet.area__container__selected__box}>
//                 <select
//                     onClick={(e) => {
//                         e.target.style.border = '0.13vw solid #da1e37';
//                         e.target.style.backgroundColor = 'white';
//                     }}
//                     style={
//                         areaValue !== 'area'
//                             ? { border: '0.13vw solid #da1e37' }
//                             : { border: 'area', backgroundColor: '#F5F5F5' }
//                     }
//                     name="area"
//                     onChange={(e) => {
//                         areaAction(e.target.value);
//                     }}
//                     value={areaValue}>
//                     <option value="area">Area</option>
//                     {manikchhariAreaList.map((area, index) => {
//                         return (
//                             <option value={area} key={index}>
//                                 {area}
//                             </option>
//                         );
//                     })}
//                 </select>
//             </div>
//         </div>
//     );
// }
// function MarishyaArea() {
//     let marishyaAreaList = ['marishya sadar'];
//     return (
//         <div className={StyleSheet.area__container}>
//             <div className={StyleSheet.area__container__title}>Area:</div>
//             <div className={StyleSheet.area__container__selected__box}>
//                 <select
//                     onClick={(e) => {
//                         e.target.style.border = '0.13vw solid #da1e37';
//                         e.target.style.backgroundColor = 'white';
//                     }}
//                     style={
//                         areaValue !== 'area'
//                             ? { border: '0.13vw solid #da1e37' }
//                             : { border: 'area', backgroundColor: '#F5F5F5' }
//                     }
//                     name="area"
//                     onChange={(e) => {
//                         areaAction(e.target.value);
//                     }}
//                     value={areaValue}>
//                     <option value="area">Area</option>
//                     {marishyaAreaList.map((area, index) => {
//                         return (
//                             <option value={area} key={index}>
//                                 {area}
//                             </option>
//                         );
//                     })}
//                 </select>
//             </div>
//         </div>
//     );
// }
// function MatirangaArea() {
//     let matirangaAreaList = ['matiranga sadar'];
//     return (
//         <div className={StyleSheet.area__container}>
//             <div className={StyleSheet.area__container__title}>Area:</div>
//             <div className={StyleSheet.area__container__selected__box}>
//                 <select
//                     onClick={(e) => {
//                         e.target.style.border = '0.13vw solid #da1e37';
//                         e.target.style.backgroundColor = 'white';
//                     }}
//                     style={
//                         areaValue !== 'area'
//                             ? { border: '0.13vw solid #da1e37' }
//                             : { border: 'area', backgroundColor: '#F5F5F5' }
//                     }
//                     name="area"
//                     onChange={(e) => {
//                         areaAction(e.target.value);
//                     }}
//                     value={areaValue}>
//                     <option value="area">Area</option>
//                     {matirangaAreaList.map((area, index) => {
//                         return (
//                             <option value={area} key={index}>
//                                 {area}
//                             </option>
//                         );
//                     })}
//                 </select>
//             </div>
//         </div>
//     );
// }
// function MatlobganjArea() {
//     let matlobganjAreaList = ['Matlobganj Kalipur', 'Matlobganj Mohanpur', 'Matlobganj Sadar'];
//     return (
//         <div className={StyleSheet.area__container}>
//             <div className={StyleSheet.area__container__title}>Area:</div>
//             <div className={StyleSheet.area__container__selected__box}>
//                 <select
//                     onClick={(e) => {
//                         e.target.style.border = '0.13vw solid #da1e37';
//                         e.target.style.backgroundColor = 'white';
//                     }}
//                     style={
//                         areaValue !== 'area'
//                             ? { border: '0.13vw solid #da1e37' }
//                             : { border: 'area', backgroundColor: '#F5F5F5' }
//                     }
//                     name="area"
//                     onChange={(e) => {
//                         areaAction(e.target.value);
//                     }}
//                     value={areaValue}>
//                     <option value="area">Area</option>
//                     {matlobganjAreaList.map((area, index) => {
//                         return (
//                             <option value={area} key={index}>
//                                 {area}
//                             </option>
//                         );
//                     })}
//                 </select>
//             </div>
//         </div>
//     );
// }
// function MirsharaiArea() {
//     let mirsharaiAreaList = [
//         '	Mirsharai Abutorab',
//         'Mirsharai Azampur',
//         'Mirsharai Bharawazhat',
//         'Mirsharai Darrogahat',
//         'Mirsharai Joarganj',
//         'Mirsharai Korerhat',
//         'Mirsharai Mirsharai',
//         'Mirsharai Mohazanhat'
//     ];
//     return (
//         <div className={StyleSheet.area__container}>
//             <div className={StyleSheet.area__container__title}>Area:</div>
//             <div className={StyleSheet.area__container__selected__box}>
//                 <select
//                     onClick={(e) => {
//                         e.target.style.border = '0.13vw solid #da1e37';
//                         e.target.style.backgroundColor = 'white';
//                     }}
//                     style={
//                         areaValue !== 'area'
//                             ? { border: '0.13vw solid #da1e37' }
//                             : { border: 'area', backgroundColor: '#F5F5F5' }
//                     }
//                     name="area"
//                     onChange={(e) => {
//                         areaAction(e.target.value);
//                     }}
//                     value={areaValue}>
//                     <option value="area">Area</option>
//                     {mirsharaiAreaList.map((area, index) => {
//                         return (
//                             <option value={area} key={index}>
//                                 {area}
//                             </option>
//                         );
//                     })}
//                 </select>
//             </div>
//         </div>
//     );
// }
// function MuradnagarArea() {
//     let muradnagarAreaList = [
//         'Muradnagar Bangra',
//         'Muradnagar Companyganj',
//         'Muradnagar Muradnagar',
//         'Muradnagar Pantibazar',
//         'Muradnagar Ramchandarpur',
//         'Muradnagar Sonakanda'
//     ];
//     return (
//         <div className={StyleSheet.area__container}>
//             <div className={StyleSheet.area__container__title}>Area:</div>
//             <div className={StyleSheet.area__container__selected__box}>
//                 <select
//                     onClick={(e) => {
//                         e.target.style.border = '0.13vw solid #da1e37';
//                         e.target.style.backgroundColor = 'white';
//                     }}
//                     style={
//                         areaValue !== 'area'
//                             ? { border: '0.13vw solid #da1e37' }
//                             : { border: 'area', backgroundColor: '#F5F5F5' }
//                     }
//                     name="area"
//                     onChange={(e) => {
//                         areaAction(e.target.value);
//                     }}
//                     value={areaValue}>
//                     <option value="area">Area</option>
//                     {muradnagarAreaList.map((area, index) => {
//                         return (
//                             <option value={area} key={index}>
//                                 {area}
//                             </option>
//                         );
//                     })}
//                 </select>
//             </div>
//         </div>
//     );
// }
// function NabinagarArea() {
//     let nabinagarAreaList = [
//         'Nabinagar Jibanganj',
//         'Nabinagar Kaitala',
//         'Nabinagar Laubfatehpur',
//         'Nabinagar Rasullabad',
//         'Nabinagar Ratanpur',
//         'Nabinagar Sadar',
//         'Nabinagar Salimganj',
//         'Nabinagar Shahapur',
//         'Nabinagar Shamgram',
//         'Nasirnagar',
//         'Nasirnagar Fandauk'
//     ];
//     return (
//         <div className={StyleSheet.area__container}>
//             <div className={StyleSheet.area__container__title}>Area:</div>
//             <div className={StyleSheet.area__container__selected__box}>
//                 <select
//                     onClick={(e) => {
//                         e.target.style.border = '0.13vw solid #da1e37';
//                         e.target.style.backgroundColor = 'white';
//                     }}
//                     style={
//                         areaValue !== 'area'
//                             ? { border: '0.13vw solid #da1e37' }
//                             : { border: 'area', backgroundColor: '#F5F5F5' }
//                     }
//                     name="area"
//                     onChange={(e) => {
//                         areaAction(e.target.value);
//                     }}
//                     value={areaValue}>
//                     <option value="area">Area</option>
//                     {nabinagarAreaList.map((area, index) => {
//                         return (
//                             <option value={area} key={index}>
//                                 {area}
//                             </option>
//                         );
//                     })}
//                 </select>
//             </div>
//         </div>
//     );
// }
// function NaniachharArea() {
//     let naniachharAreaList = ['naniachhar sadar'];
//     return (
//         <div className={StyleSheet.area__container}>
//             <div className={StyleSheet.area__container__title}>Area:</div>
//             <div className={StyleSheet.area__container__selected__box}>
//                 <select
//                     onClick={(e) => {
//                         e.target.style.border = '0.13vw solid #da1e37';
//                         e.target.style.backgroundColor = 'white';
//                     }}
//                     style={
//                         areaValue !== 'area'
//                             ? { border: '0.13vw solid #da1e37' }
//                             : { border: 'area', backgroundColor: '#F5F5F5' }
//                     }
//                     name="area"
//                     onChange={(e) => {
//                         areaAction(e.target.value);
//                     }}
//                     value={areaValue}>
//                     <option value="area">Area</option>
//                     {naniachharAreaList.map((area, index) => {
//                         return (
//                             <option value={area} key={index}>
//                                 {area}
//                             </option>
//                         );
//                     })}
//                 </select>
//             </div>
//         </div>
//     );
// }
// function NoakhaliArea() {
//     let noakhaliAreaList = [
//         'Amishsha Para',
//         'Bangla Bazar',
//         'Bashairer Doakan',
//         'Bashurhaat',
//         'Binodpur',
//         'Bishwanaath Bus Stop',
//         'Bojra Bazar',
//         'Boro Mosjid Mor',
//         'Chaiyaani Bazar',
//         'Chandraganj Bazar',
//         'Chatarpaiyaa',
//         'Chatkil',
//         'Church Of The Queen Of Lourdes',
//         'Conductor Mosjid',
//         'Dotter Haat',
//         'Ekhlashpur Bazar',
//         'Gabua Bazar',
//         'Harinarayanpur Railway Station',
//         'Housing State',
//         'Islamganj Bazar',
//         'Jomidar Haat',
//         'Joyaag Bazar',
//         'Kabirhaat',
//         'alitera Bazar',
//         'Kankirhaat',
//         'Kashem Bazar',
//         'Kormulla Bazar',
//         'Maijdee Bazar',
//         'Master Para',
//         'Medical Assistant Training School',
//         ' Noakhali',
//         'Mohila College Morr',
//         'Noakhali Circuit House',
//         'Noakhali Government College',
//         'Noakhali Puraton College',
//         'Noakhali Sadar Chaprashir Hat',
//         'Noakhali Sadar Charam Tua',
//         'Noakhali Sadar Char Jabbar',
//         'Noakhali Sadar Din Monir Hat',
//         'Noakhali Sadar Kabirhat',
//         'Noakhali Sadar Khalifar Hat',
//         'Noakhali Sadar Mriddarhat',
//         'Noakhali Sadar Pak Kishoreganj',
//         'Noakhali Super Market',
//         'Noakhali Upazila Parishad',
//         'NSTU',
//         'Ramjan Bibi',
//         'Senbag',
//         'Shaheber Haat',
//         'Shubornochar',
//         'Sonapur Bus Stand',
//         'Sunaimuri',
//         'Textile College',
//         'Townhall Mor',
//         'Tv Center'
//     ];
//     return (
//         <div className={StyleSheet.area__container}>
//             <div className={StyleSheet.area__container__title}>Area:</div>
//             <div className={StyleSheet.area__container__selected__box}>
//                 <select
//                     onClick={(e) => {
//                         e.target.style.border = '0.13vw solid #da1e37';
//                         e.target.style.backgroundColor = 'white';
//                     }}
//                     style={
//                         areaValue !== 'area'
//                             ? { border: '0.13vw solid #da1e37' }
//                             : { border: 'area', backgroundColor: '#F5F5F5' }
//                     }
//                     name="area"
//                     onChange={(e) => {
//                         areaAction(e.target.value);
//                     }}
//                     value={areaValue}>
//                     <option value="area">Area</option>
//                     {noakhaliAreaList.map((area, index) => {
//                         return (
//                             <option value={area} key={index}>
//                                 {area}
//                             </option>
//                         );
//                     })}
//                 </select>
//             </div>
//         </div>
//     );
// }
// function PanchhariArea() {
//     let PanchhariAreaList = ['panchhari sadar'];
//     return (
//         <div className={StyleSheet.area__container}>
//             <div className={StyleSheet.area__container__title}>Area:</div>
//             <div className={StyleSheet.area__container__selected__box}>
//                 <select
//                     onClick={(e) => {
//                         e.target.style.border = '0.13vw solid #da1e37';
//                         e.target.style.backgroundColor = 'white';
//                     }}
//                     style={
//                         areaValue !== 'area'
//                             ? { border: '0.13vw solid #da1e37' }
//                             : { border: 'area', backgroundColor: '#F5F5F5' }
//                     }
//                     name="area"
//                     onChange={(e) => {
//                         areaAction(e.target.value);
//                     }}
//                     value={areaValue}>
//                     <option value="area">Area</option>
//                     {PanchhariAreaList.map((area, index) => {
//                         return (
//                             <option value={area} key={index}>
//                                 {area}
//                             </option>
//                         );
//                     })}
//                 </select>
//             </div>
//         </div>
//     );
// }
// function PashurampurArea() {
//     let pashurampurAreaList = [
//         'Pashurampur Fulgazi',
//         'Pashurampur Munshirhat',
//         'Pashurampur Pashurampur',
//         'Pashurampur Shuarbazar'
//     ];
//     return (
//         <div className={StyleSheet.area__container}>
//             <div className={StyleSheet.area__container__title}>Area:</div>
//             <div className={StyleSheet.area__container__selected__box}>
//                 <select
//                     onClick={(e) => {
//                         e.target.style.border = '0.13vw solid #da1e37';
//                         e.target.style.backgroundColor = 'white';
//                     }}
//                     style={
//                         areaValue !== 'area'
//                             ? { border: '0.13vw solid #da1e37' }
//                             : { border: 'area', backgroundColor: '#F5F5F5' }
//                     }
//                     name="area"
//                     onChange={(e) => {
//                         areaAction(e.target.value);
//                     }}
//                     value={areaValue}>
//                     <option value="area">Area</option>
//                     {pashurampurAreaList.map((area, index) => {
//                         return (
//                             <option value={area} key={index}>
//                                 {area}
//                             </option>
//                         );
//                     })}
//                 </select>
//             </div>
//         </div>
//     );
// }
// function PatiyaArea() {
//     let patiyaAreaList = ['patiya budhpara', 'patiya sadar'];
//     return (
//         <div className={StyleSheet.area__container}>
//             <div className={StyleSheet.area__container__title}>Area:</div>
//             <div className={StyleSheet.area__container__selected__box}>
//                 <select
//                     onClick={(e) => {
//                         e.target.style.border = '0.13vw solid #da1e37';
//                         e.target.style.backgroundColor = 'white';
//                     }}
//                     style={
//                         areaValue !== 'area'
//                             ? { border: '0.13vw solid #da1e37' }
//                             : { border: 'area', backgroundColor: '#F5F5F5' }
//                     }
//                     name="area"
//                     onChange={(e) => {
//                         areaAction(e.target.value);
//                     }}
//                     value={areaValue}>
//                     <option value="area">Area</option>
//                     {patiyaAreaList.map((area, index) => {
//                         return (
//                             <option value={area} key={index}>
//                                 {area}
//                             </option>
//                         );
//                     })}
//                 </select>
//             </div>
//         </div>
//     );
// }
// function RajsthaliArea() {
//     let rajsthaliAreaList = ['rajsthali sadar'];
//     return (
//         <div className={StyleSheet.area__container}>
//             <div className={StyleSheet.area__container__title}>Area:</div>
//             <div className={StyleSheet.area__container__selected__box}>
//                 <select
//                     onClick={(e) => {
//                         e.target.style.border = '0.13vw solid #da1e37';
//                         e.target.style.backgroundColor = 'white';
//                     }}
//                     style={
//                         areaValue !== 'area'
//                             ? { border: '0.13vw solid #da1e37' }
//                             : { border: 'area', backgroundColor: '#F5F5F5' }
//                     }
//                     name="area"
//                     onChange={(e) => {
//                         areaAction(e.target.value);
//                     }}
//                     value={areaValue}>
//                     <option value="area">Area</option>
//                     {rajsthaliAreaList.map((area, index) => {
//                         return (
//                             <option value={area} key={index}>
//                                 {area}
//                             </option>
//                         );
//                     })}
//                 </select>
//             </div>
//         </div>
//     );
// }
// function RamganjArea() {
//     let ramganjAreaList = [
//         'Ramganj Alipur',
//         'Ramganj Dolta',
//         'Ramganj Kanchanpur',
//         'Ramganj Naagmud',
//         'Ramganj Panpara',
//         'Ramganj Ramganj'
//     ];
//     return (
//         <div className={StyleSheet.area__container}>
//             <div className={StyleSheet.area__container__title}>Area:</div>
//             <div className={StyleSheet.area__container__selected__box}>
//                 <select
//                     onClick={(e) => {
//                         e.target.style.border = '0.13vw solid #da1e37';
//                         e.target.style.backgroundColor = 'white';
//                     }}
//                     style={
//                         areaValue !== 'area'
//                             ? { border: '0.13vw solid #da1e37' }
//                             : { border: 'area', backgroundColor: '#F5F5F5' }
//                     }
//                     name="area"
//                     onChange={(e) => {
//                         areaAction(e.target.value);
//                     }}
//                     value={areaValue}>
//                     <option value="area">Area</option>
//                     {ramganjAreaList.map((area, index) => {
//                         return (
//                             <option value={area} key={index}>
//                                 {area}
//                             </option>
//                         );
//                     })}
//                 </select>
//             </div>
//         </div>
//     );
// }
// function RamgharArea() {
//     let ramgharAreaList = ['ramghar head office'];
//     return (
//         <div className={StyleSheet.area__container}>
//             <div className={StyleSheet.area__container__title}>Area:</div>
//             <div className={StyleSheet.area__container__selected__box}>
//                 <select
//                     onClick={(e) => {
//                         e.target.style.border = '0.13vw solid #da1e37';
//                         e.target.style.backgroundColor = 'white';
//                     }}
//                     style={
//                         areaValue !== 'area'
//                             ? { border: '0.13vw solid #da1e37' }
//                             : { border: 'area', backgroundColor: '#F5F5F5' }
//                     }
//                     name="area"
//                     onChange={(e) => {
//                         areaAction(e.target.value);
//                     }}
//                     value={areaValue}>
//                     <option value="area">Area</option>
//                     {ramgharAreaList.map((area, index) => {
//                         return (
//                             <option value={area} key={index}>
//                                 {area}
//                             </option>
//                         );
//                     })}
//                 </select>
//             </div>
//         </div>
//     );
// }
// function RamuArea() {
//     let ramuAreaList = ['ramu ramu'];
//     return (
//         <div className={StyleSheet.area__container}>
//             <div className={StyleSheet.area__container__title}>Area:</div>
//             <div className={StyleSheet.area__container__selected__box}>
//                 <select
//                     onClick={(e) => {
//                         e.target.style.border = '0.13vw solid #da1e37';
//                         e.target.style.backgroundColor = 'white';
//                     }}
//                     style={
//                         areaValue !== 'area'
//                             ? { border: '0.13vw solid #da1e37' }
//                             : { border: 'area', backgroundColor: '#F5F5F5' }
//                     }
//                     name="area"
//                     onChange={(e) => {
//                         areaAction(e.target.value);
//                     }}
//                     value={areaValue}>
//                     <option value="area">Area</option>
//                     {ramuAreaList.map((area, index) => {
//                         return (
//                             <option value={area} key={index}>
//                                 {area}
//                             </option>
//                         );
//                     })}
//                 </select>
//             </div>
//         </div>
//     );
// }
// function RangamatiArea() {
//     let rangamatiAreaList = ['kathaltoli', 'rangamati sadar'];
//     return (
//         <div className={StyleSheet.area__container}>
//             <div className={StyleSheet.area__container__title}>Area:</div>
//             <div className={StyleSheet.area__container__selected__box}>
//                 <select
//                     onClick={(e) => {
//                         e.target.style.border = '0.13vw solid #da1e37';
//                         e.target.style.backgroundColor = 'white';
//                     }}
//                     style={
//                         areaValue !== 'area'
//                             ? { border: '0.13vw solid #da1e37' }
//                             : { border: 'area', backgroundColor: '#F5F5F5' }
//                     }
//                     name="area"
//                     onChange={(e) => {
//                         areaAction(e.target.value);
//                     }}
//                     value={areaValue}>
//                     <option value="area">Area</option>
//                     {rangamatiAreaList.map((area, index) => {
//                         return (
//                             <option value={area} key={index}>
//                                 {area}
//                             </option>
//                         );
//                     })}
//                 </select>
//             </div>
//         </div>
//     );
// }
// function RanguniaArea() {
//     let ranguniaAreaList = [
//         'Dakkhin Ghatchak',
//         'Fakirkill',
//         'Kadeer Nagar',
//         'Murad Nagar',
//         'Rangunia Dhamair',
//         'Rangunia Sadar',
//         'Sayad Bari',
//         'Uttar Gatchak'
//     ];
//     return (
//         <div className={StyleSheet.area__container}>
//             <div className={StyleSheet.area__container__title}>Area:</div>
//             <div className={StyleSheet.area__container__selected__box}>
//                 <select
//                     onClick={(e) => {
//                         e.target.style.border = '0.13vw solid #da1e37';
//                         e.target.style.backgroundColor = 'white';
//                     }}
//                     style={
//                         areaValue !== 'area'
//                             ? { border: '0.13vw solid #da1e37' }
//                             : { border: 'area', backgroundColor: '#F5F5F5' }
//                     }
//                     name="area"
//                     onChange={(e) => {
//                         areaAction(e.target.value);
//                     }}
//                     value={areaValue}>
//                     <option value="area">Area</option>
//                     {ranguniaAreaList.map((area, index) => {
//                         return (
//                             <option value={area} key={index}>
//                                 {area}
//                             </option>
//                         );
//                     })}
//                 </select>
//             </div>
//         </div>
//     );
// }
// function RaozanArea() {
//     let raozanAreaList = [
//         'Raozan Beenajuri',
//         'Raozan Dewanpur',
//         'Raozan Fatepur',
//         'Raozan Guzra Noapara',
//         'Raozan jagannath Hat',
//         'Raozan Kundeshwari',
//         'Raozan Mohamuni',
//         'Raozan Pouroshobha',
//         'Rauzan Gahira'
//     ];
//     return (
//         <div className={StyleSheet.area__container}>
//             <div className={StyleSheet.area__container__title}>Area:</div>
//             <div className={StyleSheet.area__container__selected__box}>
//                 <select
//                     onClick={(e) => {
//                         e.target.style.border = '0.13vw solid #da1e37';
//                         e.target.style.backgroundColor = 'white';
//                     }}
//                     style={
//                         areaValue !== 'area'
//                             ? { border: '0.13vw solid #da1e37' }
//                             : { border: 'area', backgroundColor: '#F5F5F5' }
//                     }
//                     name="area"
//                     onChange={(e) => {
//                         areaAction(e.target.value);
//                     }}
//                     value={areaValue}>
//                     <option value="area">Area</option>
//                     {raozanAreaList.map((area, index) => {
//                         return (
//                             <option value={area} key={index}>
//                                 {area}
//                             </option>
//                         );
//                     })}
//                 </select>
//             </div>
//         </div>
//     );
// }
// function RaypurArea() {
//     let raypurAreaList = [
//         'Raypur Bhuabari',
//         'Raypur Haydarganj',
//         'Raypur Khaser Hat',
//         'Raypur Nagerdighirpar',
//         'Raypur Rakhallia',
//         'Raypur Sadar'
//     ];
//     return (
//         <div className={StyleSheet.area__container}>
//             <div className={StyleSheet.area__container__title}>Area:</div>
//             <div className={StyleSheet.area__container__selected__box}>
//                 <select
//                     onClick={(e) => {
//                         e.target.style.border = '0.13vw solid #da1e37';
//                         e.target.style.backgroundColor = 'white';
//                     }}
//                     style={
//                         areaValue !== 'area'
//                             ? { border: '0.13vw solid #da1e37' }
//                             : { border: 'area', backgroundColor: '#F5F5F5' }
//                     }
//                     name="area"
//                     onChange={(e) => {
//                         areaAction(e.target.value);
//                     }}
//                     value={areaValue}>
//                     <option value="area">Area</option>
//                     {raypurAreaList.map((area, index) => {
//                         return (
//                             <option value={area} key={index}>
//                                 {area}
//                             </option>
//                         );
//                     })}
//                 </select>
//             </div>
//         </div>
//     );
// }
// function SandwipArea() {
//     let sandwipAreaList = ['sandwip sandwip', 'sandwip shiberhat', 'sandwip urichar'];
//     return (
//         <div className={StyleSheet.area__container}>
//             <div className={StyleSheet.area__container__title}>Area:</div>
//             <div className={StyleSheet.area__container__selected__box}>
//                 <select
//                     onClick={(e) => {
//                         e.target.style.border = '0.13vw solid #da1e37';
//                         e.target.style.backgroundColor = 'white';
//                     }}
//                     style={
//                         areaValue !== 'area'
//                             ? { border: '0.13vw solid #da1e37' }
//                             : { border: 'area', backgroundColor: '#F5F5F5' }
//                     }
//                     name="area"
//                     onChange={(e) => {
//                         areaAction(e.target.value);
//                     }}
//                     value={areaValue}>
//                     <option value="area">Area</option>
//                     {sandwipAreaList.map((area, index) => {
//                         return (
//                             <option value={area} key={index}>
//                                 {area}
//                             </option>
//                         );
//                     })}
//                 </select>
//             </div>
//         </div>
//     );
// }
// function SarailArea() {
//     let sarailAreaList = ['sarail chandura', 'sarail sadar', 'sarail shahbajpur'];
//     return (
//         <div className={StyleSheet.area__container}>
//             <div className={StyleSheet.area__container__title}>Area:</div>
//             <div className={StyleSheet.area__container__selected__box}>
//                 <select
//                     onClick={(e) => {
//                         e.target.style.border = '0.13vw solid #da1e37';
//                         e.target.style.backgroundColor = 'white';
//                     }}
//                     style={
//                         areaValue !== 'area'
//                             ? { border: '0.13vw solid #da1e37' }
//                             : { border: 'area', backgroundColor: '#F5F5F5' }
//                     }
//                     name="area"
//                     onChange={(e) => {
//                         areaAction(e.target.value);
//                     }}
//                     value={areaValue}>
//                     <option value="area">Area</option>
//                     {sarailAreaList.map((area, index) => {
//                         return (
//                             <option value={area} key={index}>
//                                 {area}
//                             </option>
//                         );
//                     })}
//                 </select>
//             </div>
//         </div>
//     );
// }
// function SatkaniaArea() {
//     let satkaniaAreaList = ['satkania baitul ijjat', 'satkania bazalia', 'satkania satkania'];
//     return (
//         <div className={StyleSheet.area__container}>
//             <div className={StyleSheet.area__container__title}>Area:</div>
//             <div className={StyleSheet.area__container__selected__box}>
//                 <select
//                     onClick={(e) => {
//                         e.target.style.border = '0.13vw solid #da1e37';
//                         e.target.style.backgroundColor = 'white';
//                     }}
//                     style={
//                         areaValue !== 'area'
//                             ? { border: '0.13vw solid #da1e37' }
//                             : { border: 'area', backgroundColor: '#F5F5F5' }
//                     }
//                     name="area"
//                     onChange={(e) => {
//                         areaAction(e.target.value);
//                     }}
//                     value={areaValue}>
//                     <option value="area">Area</option>
//                     {satkaniaAreaList.map((area, index) => {
//                         return (
//                             <option value={area} key={index}>
//                                 {area}
//                             </option>
//                         );
//                     })}
//                 </select>
//             </div>
//         </div>
//     );
// }
// function SenbagArea() {
//     let senbagAreaList = [
//         'Senbag Beezbag',
//         'Senbag Chatarpaia',
//         'Senbag Kallyandi',
//         'Senbag Kankirhat',
//         'Senbag Sadar',
//         'Senbag T.P. Lamua'
//     ];
//     return (
//         <div className={StyleSheet.area__container}>
//             <div className={StyleSheet.area__container__title}>Area:</div>
//             <div className={StyleSheet.area__container__selected__box}>
//                 <select
//                     onClick={(e) => {
//                         e.target.style.border = '0.13vw solid #da1e37';
//                         e.target.style.backgroundColor = 'white';
//                     }}
//                     style={
//                         areaValue !== 'area'
//                             ? { border: '0.13vw solid #da1e37' }
//                             : { border: 'area', backgroundColor: '#F5F5F5' }
//                     }
//                     name="area"
//                     onChange={(e) => {
//                         areaAction(e.target.value);
//                     }}
//                     value={areaValue}>
//                     <option value="area">Area</option>
//                     {senbagAreaList.map((area, index) => {
//                         return (
//                             <option value={area} key={index}>
//                                 {area}
//                             </option>
//                         );
//                     })}
//                 </select>
//             </div>
//         </div>
//     );
// }
// function ShahrastiArea() {
//     let shahrastiAreaList = [
//         'Shahrasti Chotoshi',
//         'Shahrasti Islamia Madrasha',
//         'Shahrasti Khilabazar',
//         'Shahrasti Pashchim Kherihar Al',
//         'Shahrasti Sadar'
//     ];
//     return (
//         <div className={StyleSheet.area__container}>
//             <div className={StyleSheet.area__container__title}>Area:</div>
//             <div className={StyleSheet.area__container__selected__box}>
//                 <select
//                     onClick={(e) => {
//                         e.target.style.border = '0.13vw solid #da1e37';
//                         e.target.style.backgroundColor = 'white';
//                     }}
//                     style={
//                         areaValue !== 'area'
//                             ? { border: '0.13vw solid #da1e37' }
//                             : { border: 'area', backgroundColor: '#F5F5F5' }
//                     }
//                     name="area"
//                     onChange={(e) => {
//                         areaAction(e.target.value);
//                     }}
//                     value={areaValue}>
//                     <option value="area">Area</option>
//                     {shahrastiAreaList.map((area, index) => {
//                         return (
//                             <option value={area} key={index}>
//                                 {area}
//                             </option>
//                         );
//                     })}
//                 </select>
//             </div>
//         </div>
//     );
// }
// function SitakundaArea() {
//     let sitakundaAreaList = [
//         'Sitakunda Barabkunda',
//         'Sitakunda Baroidhala',
//         'Sitakunda Bawashbaria',
//         'Sitakunda Bhatiari',
//         'Sitakunda Fouzdarhat',
//         'Sitakunda Jafrabad',
//         'Sitakunda Kumira',
//         'Sitakunda Sitakunda'
//     ];
//     return (
//         <div className={StyleSheet.area__container}>
//             <div className={StyleSheet.area__container__title}>Area:</div>
//             <div className={StyleSheet.area__container__selected__box}>
//                 <select
//                     onClick={(e) => {
//                         e.target.style.border = '0.13vw solid #da1e37';
//                         e.target.style.backgroundColor = 'white';
//                     }}
//                     style={
//                         areaValue !== 'area'
//                             ? { border: '0.13vw solid #da1e37' }
//                             : { border: 'area', backgroundColor: '#F5F5F5' }
//                     }
//                     name="area"
//                     onChange={(e) => {
//                         areaAction(e.target.value);
//                     }}
//                     value={areaValue}>
//                     <option value="area">Area</option>
//                     {sitakundaAreaList.map((area, index) => {
//                         return (
//                             <option value={area} key={index}>
//                                 {area}
//                             </option>
//                         );
//                     })}
//                 </select>
//             </div>
//         </div>
//     );
// }
// function SonagaziArea() {
//     let sonagaziAreaList = [
//         'Sonagazi Ahmadpur',
//         'Sonagazi Kazirhat',
//         'Sonagazi Motiganj',
//         'Sonagazi Sadar'
//     ];
//     return (
//         <div className={StyleSheet.area__container}>
//             <div className={StyleSheet.area__container__title}>Area:</div>
//             <div className={StyleSheet.area__container__selected__box}>
//                 <select
//                     onClick={(e) => {
//                         e.target.style.border = '0.13vw solid #da1e37';
//                         e.target.style.backgroundColor = 'white';
//                     }}
//                     style={
//                         areaValue !== 'area'
//                             ? { border: '0.13vw solid #da1e37' }
//                             : { border: 'area', backgroundColor: '#F5F5F5' }
//                     }
//                     name="area"
//                     onChange={(e) => {
//                         areaAction(e.target.value);
//                     }}
//                     value={areaValue}>
//                     <option value="area">Area</option>
//                     {sonagaziAreaList.map((area, index) => {
//                         return (
//                             <option value={area} key={index}>
//                                 {area}
//                             </option>
//                         );
//                     })}
//                 </select>
//             </div>
//         </div>
//     );
// }
// function TeknafArea() {
//     let teknafAreaList = ['teknaf hnila', 'teknaf sadar', 'teknaf st.martin'];
//     return (
//         <div className={StyleSheet.area__container}>
//             <div className={StyleSheet.area__container__title}>Area:</div>
//             <div className={StyleSheet.area__container__selected__box}>
//                 <select
//                     onClick={(e) => {
//                         e.target.style.border = '0.13vw solid #da1e37';
//                         e.target.style.backgroundColor = 'white';
//                     }}
//                     style={
//                         areaValue !== 'area'
//                             ? { border: '0.13vw solid #da1e37' }
//                             : { border: 'area', backgroundColor: '#F5F5F5' }
//                     }
//                     name="area"
//                     onChange={(e) => {
//                         areaAction(e.target.value);
//                     }}
//                     value={areaValue}>
//                     <option value="area">Area</option>
//                     {teknafAreaList.map((area, index) => {
//                         return (
//                             <option value={area} key={index}>
//                                 {area}
//                             </option>
//                         );
//                     })}
//                 </select>
//             </div>
//         </div>
//     );
// }
// function UkhiaArea() {
//     let ukhiaAreaList = ['ukhia sadar'];
//     return (
//         <div className={StyleSheet.area__container}>
//             <div className={StyleSheet.area__container__title}>Area:</div>
//             <div className={StyleSheet.area__container__selected__box}>
//                 <select
//                     onClick={(e) => {
//                         e.target.style.border = '0.13vw solid #da1e37';
//                         e.target.style.backgroundColor = 'white';
//                     }}
//                     style={
//                         areaValue !== 'area'
//                             ? { border: '0.13vw solid #da1e37' }
//                             : { border: 'area', backgroundColor: '#F5F5F5' }
//                     }
//                     name="area"
//                     onChange={(e) => {
//                         areaAction(e.target.value);
//                     }}
//                     value={areaValue}>
//                     <option value="area">Area</option>
//                     {ukhiaAreaList.map((area, index) => {
//                         return (
//                             <option value={area} key={index}>
//                                 {area}
//                             </option>
//                         );
//                     })}
//                 </select>
//             </div>
//         </div>
//     );
// }
// // Chattogram all area end

// // dhaka all area start
// function DhakaNorthArea() {
//     let dhakaNorthAreaList = [
//         'Bashundhara R/A',
//         'Abul Hotel Bus Stop',
//         'Abur Tek Road',
//         'ACS Garments (Ati Para)',
//         'Adabor',
//         'Adam Ali Market',
//         'Adarsha Bag',
//         'Aftab nagar',
//         'Agargaon',
//         'Ahmed Nagar',
//         'Ajompur',
//         'Akij Foundation',
//         'Al Huda Mosjid',
//         'Ananda Nagar',
//         'Apollo Hospital',
//         'Arjat Para',
//         'Ark Hospital',
//         'Armanitola',
//         'Army Society',
//         'Army Stadium',
//         'Asad Gate',
//         'Ashalota',
//         'Ashkona',
//         'Askona Boro Mosjid',
//         'Askona Dilder Bari',
//         'Askona Mosjid Road',
//         'Askona Panir Pamp',
//         'Atipara Bazar',
//         'Azompur Brac Market',
//         'Badda',
//         'Badda Hossain Market',
//         'Bagbari',
//         'Baily Road',
//         'Baitul Azam Mosjid',
//         'Balughat',
//         'Banani Bus Stand',
//         'Banani DOHS',
//         'Banani Graveyard',
//         'Banani Naval Head Quarter',
//         'Banani Road No. 1 - 11',
//         'Banani Road No. 12 - 19',
//         'Banani Road No. 20 - 28',
//         'Banasree Block A',
//         'Banasree Block C',
//         'Banasree Block D',
//         'Banasree Block E',
//         'Banasree Block J',
//         'Banasree Block K',
//         'Baridhara',
//         'Baridhara DOHS',
//         'Barontek',
//         'Bashtola',
//         'Bashundhara',
//         'Bashundhara Block A',
//         'Bashundhara Block B',
//         'Bashundhara Block C',
//         'Bashundhara Block D',
//         'Bashundhara Block F',
//         'Bashundhara Block H',
//         'Bashundhara Block I',
//         'Bashundhara Bus Stand',
//         'Baunia',
//         'Bawlia Para',
//         'Bawneabad Area',
//         'Begunbari',
//         'Bepari Bari',
//         'Bhuyia Para',
//         'Bishteki',
//         'Bonolota',
//         'Borobagh',
//         'Box Nagar',
//         'CDH Shampan',
//         'Chairman bari',
//         'Chairman Para',
//         'Chalabon',
//         'Chamurkhan',
//         'Chittagong Road',
//         'City Complex Road',
//         'Coca Cola Bus Stop',
//         'Confidence Shopping Mall',
//         'Darus Salam',
//         'Dewan Bari',
//         'Dewan City',
//         'Dhaka - Cantonment',
//         'Dhaka - North City Corporation Market',
//         'Dhakinkhan Bazar',
//         'Dhamrai',
//         'Dhoronggar Tek',
//         'Diabari',
//         'Dobadia',
//         'Doctor Goli',
//         'Dokkhingao',
//         'Dour',
//         'East Hazipara',
//         'East Merul Badda',
//         'East Nakhalpara',
//         'East Nurerchala',
//         'East Rampura',
//         'East West Medical College',
//         'Faidabad Mor',
//         'Faidabad Police Fari',
//         'Faidabad Prmary School',
//         'Farid Market',
//         'Farmgate',
//         'Gabtoli Bus Terminal',
//         'Gawair',
//         'Golartek',
//         'Gono Koborsthan Road',
//         'Goran Tempo stand',
//         'Gulshan 1',
//         'Gulshan 2',
//         'Gulshan Badda link Road',
//         'Hatim Bag',
//         'Hatirjheel',
//         'Hazi Camp',
//         'Helal Market',
//         'Holan',
//         'House Building',
//         'Ibrahimpur',
//         'ICDDRB',
//         'IUBAT',
//         'Jahangir Gate',
//         'Jahurul Haque City',
//         'Jamtola',
//         'Jamuna Future Park',
//         'Jashimuddin Road',
//         'Joar Shahara',
//         'Joynal Market',
//         'Kacha Bazar',
//         'Kachkura',
//         'Kafrul',
//         'Kalachandpur',
//         'Kallyanpur',
//         'Kamar Para',
//         'Karwan Bazar',
//         'Kathal tola',
//         'Kawranbazar',
//         'Kazi Bari',
//         'Kazipara',
//         'Khilgaon',
//         'Khilgoan Bus stop',
//         'Khilkhet',
//         'Koloni Bazar',
//         'Kosai Bazar',
//         'Koshaibari',
//         'Kunipara',
//         'Kuril',
//         'Kuril bus stop',
//         'Kurmitola',
//         'Malibag bus stand',
//         'Malibag railgate',
//         'Manikdi',
//         'Masranga Television',
//         'Master Para Bazar',
//         'Masterpara Kola Bagan',
//         'Master Para Munda',
//         'Matikata',
//         'Mazar Road',
//         'Mazi Bari',
//         'Medical Road',
//         'Meradia',
//         'Meradia Graveyeard',
//         'Meradia kacha bazar',
//         'Merul',
//         'Miapara Mosjid Road',
//         'Middle badda',
//         'Middle Meradia',
//         'Mirbag',
//         'Mirpur 1',
//         'Mirpur 10',
//         'Mirpur 60 Feet',
//         'Mirpur Botanical Garden',
//         'Mirpur Cantonment',
//         'Mirpur Ceramic',
//         'Mirpur Colony',
//         'Mirpur Darus Salam',
//         'Mirpur DOHS',
//         'Mirpur Govt Housing Estate',
//         'Mirpur Kazipara',
//         'Mirpur Rupnagar',
//         'Mirpur Section 1',
//         'Mirpur Section 11',
//         'Mirpur Section 12',
//         'Mirpur Section 13',
//         'Mirpur Section 14',
//         'Mirpur Section 15',
//         'Mirpur Section 16',
//         'Mirpur Section 2',
//         'Mirpur Section 3',
//         'Mirpur Section 4',
//         'Mirpur Section 5',
//         'Mirpur Section 6',
//         'Mirpur Section 7',
//         'Mirpur Section 8',
//         'Mirpur Section 9',
//         'Mirpur Shewrapara',
//         'Mirpur Taltola',
//         'Mirpur Zoo',
//         'Modhubag',
//         'Mohakhali',
//         'Mohakhali Bus Stand',
//         'Mohakhali DOHS',
//         'Mohakhali Inter District Bus Terminal',
//         'Mohakhali Kachabazar',
//         'Mohakhali koraill Basti',
//         'Mohakhali TB Gate Jame Mosjid',
//         'Mohammadia Housing Limited',
//         'Mohammadpur Chandmiya Housing',
//         'Mohammadpur Mohammadia Housing Society',
//         'Mohammadpur Mohammadia Non Housing Area',
//         'Mohammadpur P C Culture Society',
//         'Mohammadpur Residential Area',
//         'Moinar Tek',
//         'Mojibur Market',
//         'Molla Para',
//         'Mollartek',
//         'Monipur',
//         'Monipuri Para',
//         'Mouchak Market',
//         'Muktijoddha Road',
//         'Munsi Market',
//         'Nabisco Bus Stand',
//         'Nadda',
//         'Nagoria Bari',
//         'Nakhalpara',
//         'Nama Para',
//         'Nasir er tek',
//         'Niketon',
//         'Niketon Bazar gate',
//         'Nikunja 1',
//         'oi',
//         'Nishat Nagar',
//         'Noddapara Club Mor',
//         'Noddapara Mosjid Road',
//         'Nogor Bari',
//         'Nondipara',
//         'Nondipara Bazar',
//         'Nondoni Para',
//         'Notunbag',
//         'Notunbazar Bus Stand',
//         'Noyatola',
//         'Nurer Chala',
//         'Paikpara',
//         'Paschim Rampura',
//         'Peyara Bagan',
//         'Pink City',
//         'Pirerbagh',
//         'Police Plaza',
//         'Prembagan',
//         'Primary School',
//         'Pular Tek',
//         'Rajabari Mor',
//         'Rajarbag Police Line',
//         'Ramjan Market',
//         'Rampura Bazar',
//         'Rampura Bus Stand',
//         'Rana Vola',
//         'Rasulbagh',
//         'Rupali Garden',
//         'Rupali Tower',
//         'Satrasta',
//         'Shahajalal Bank',
//         'Shahinbag',
//         'Shahjahadpur Bus Stand',
//         'Shahjahdpur',
//         'Shamol Bagh',
//         'Shantiniketon',
//         'Shantipur',
//         'Sharnalata',
//         'Shena Maloncha',
//         'Shenpara Parbata',
//         'Sher-e-Bangla Nagar',
//         'Shewrapara',
//         'Shiddheshwari',
//         'Shipahibag',
//         'Shonirakhra',
//         'Shyamoli',
//         'Sipahi bag tampoo stand',
//         'Solmaid',
//         'Sona katra',
//         'Sorkar Para',
//         'South Badda',
//         'South Banashree',
//         'Subastu Nogorvally',
//         'Taltola Khilgoan',
//         'Taltola Mor',
//         'Taltola Mosjid Road',
//         'Tejgaon',
//         'Tejgaon - Gulshan Link Road',
//         'Tejgaon Industrial Area',
//         'Tejkunipara',
//         'Tek para',
//         'Teletul Bekari',
//         'Television Museum',
//         'Tetul Tola',
//         'Tibbet Factory',
//         'TIC Colony Mor',
//         'Tilpa Para',
//         'Titas Road',
//         'Transmitter Mor',
//         'Trimohoni Bazar',
//         'Trimohoni Bridge',
//         'Truckstand',
//         'Ulon',
//         'Update Dental College',
//         'Uttara Airport',
//         'Uttara Sector 1',
//         'Uttara Sector 10',
//         'Uttara Sector 11',
//         'Uttara Sector 12',
//         'Uttara Sector 13',
//         'Uttara Sector 14',
//         'Uttara Sector 15',
//         'Uttara Sector 2',
//         'Uttara Sector 3',
//         'Uttara Sector 4',
//         'Uttara Sector 5',
//         'Uttara Sector 6',
//         'Uttara Sector 7',
//         'Uttara Sector 8',
//         'Uttara Sector 9',
//         'Uttar Badda',
//         'Uttargao',
//         'Vashantek',
//         'Vatara',
//         'Vatara Mor',
//         'West Hazipara',
//         'West Nakhalpara',
//         'West Rampura',
//         'Wireless More Bus Stop'
//     ];

//     return (
//         <div className={StyleSheet.area__container}>
//             <div className={StyleSheet.area__container__title}>Area:</div>
//             <div className={StyleSheet.area__container__selected__box}>
//                 <select
//                     onClick={(e) => {
//                         e.target.style.border = '0.13vw solid #da1e37';
//                         e.target.style.backgroundColor = 'white';
//                     }}
//                     style={
//                         areaValue !== 'area'
//                             ? { border: '0.13vw solid #da1e37' }
//                             : { border: 'area', backgroundColor: '#F5F5F5' }
//                     }
//                     name="area"
//                     onChange={(e) => {
//                         areaAction(e.target.value);
//                     }}
//                     value={areaValue}>
//                     <option value="area">Area</option>
//                     {dhakaNorthAreaList.map((area, index) => {
//                         return (
//                             <option value={area} key={index}>
//                                 {area}
//                             </option>
//                         );
//                     })}
//                 </select>
//             </div>
//         </div>
//     );
// }
// function DhakaSouthArea() {
//     let dhakaSouthAreaList = [
//         'New/Old Ak School',
//         'Abdul bani road',
//         'Abdul Hadi Lane',
//         'Abed Dali Road',
//         'Abhidas Lane',
//         'Abul Hasnat Road',
//         'Abul khairat Road',
//         'Agamasi Lane',
//         'Aga sadek road',
//         'Ahmedbagh',
//         'Ahsan Ullah Road',
//         'Alamganj Road',
//         'Al Amin Road',
//         'Aminabad colony moghbaraz',
//         'Aminbagh',
//         'Anond mohan boshak Lane',
//         'Arambagh',
//         'Armenium Street',
//         'Ashik lane',
//         'Ayub Ali colony Rahim square',
//         'Azimpur',
//         'Azizullah Road',
//         'Bagamganj Lane',
//         'Bagdasa Lane',
//         'Bahadurpur Lane',
//         'Bailey Square Moghbazar',
//         'Baitul Mukarram Stadium',
//         'Bakshibagh',
//         'Banasree',
//         'Bandura Nawabganj',
//         'Bangabandhu Avenue & Rest House',
//         'Bangabhaban',
//         'Bangladesh Bank Colony',
//         'Bangladesh Railway Barracks',
//         'Bangshal',
//         'Bangshal Road',
//         'Barnamala School',
//         'Basabo',
//         'Bashabo Ohaba Colony',
//         'Bashir uddin road',
//         'Bashundhara City',
//         'Basu Bazar Lane',
//         'BDR Pilkhana',
//         'Begum Bazar',
//         'Bhagwati Banerjee Road',
//         'Bhanga Press',
//         'Bhojhari Saha Street',
//         'Bijoy Nagar',
//         'Central prison',
//         'central public library',
//         'Chamelibagh',
//         'Chandi Charan Bose Street',
//         'Chankharpul lane',
//         'Chan Para',
//         'ChanPara Zia Bagh',
//         'Chawk Bazar',
//         'Chota Katra',
//         'Circular Road',
//         'Committee ganj',
//         'Court House Street',
//         'D.C Court',
//         'Dayaganj Jelepara',
//         'Dayaganj Road',
//         'DC Roy Road',
//         'Deen Nath Sen Road',
//         'Demra',
//         'Dhaka Cotton Mills',
//         'Dhaka medical college',
//         'Dhaka University',
//         'Dhakeshwari Road',
//         'Dhalpur',
//         'Dhanmondi 1',
//         'Dhanmondi 10',
//         'Dhanmondi 10A',
//         'Dhanmondi 11',
//         'Dhanmondi 11A',
//         'Dhanmondi 12',
//         'Dhanmondi 12A',
//         'Dhanmondi 13',
//         'Dhanmondi 13A',
//         'Dhanmondi 14',
//         'Dhanmondi 15',
//         'Dhanmondi 16',
//         'Dhanmondi 17',
//         'Dhanmondi 18',
//         'Dhanmondi 19',
//         'Dhanmondi 1A',
//         'Dhanmondi 2',
//         'Dhanmondi 20',
//         'Dhanmondi 21',
//         'Dhanmondi 22',
//         'Dhanmondi 23',
//         'Dhanmondi 24',
//         'Dhanmondi 25',
//         'Dhanmondi 26',
//         'Dhanmondi 27',
//         'Dhanmondi 28',
//         'Dhanmondi 29',
//         'Dhanmondi 2A',
//         'Dhanmondi 3',
//         'hanmondi 30',
//         'Dhanmondi 31',
//         'Dhanmondi 32',
//         'Dhanmondi 3A',
//         'Dhanmondi 4',
//         'Dhanmondi 4A',
//         'Dhanmondi 5',
//         'Dhanmondi 5A',
//         'Dhanmondi 6',
//         'Dhanmondi 6A',
//         'Dhanmondi 7',
//         'Dhanmondi 7A',
//         'Dhanmondi 8',
//         'Dhanmondi 8A',
//         'Dhanmondi 9',
//         'Dhanmondi 9A',
//         'Dhanmondi Staff Quarter',
//         'Dholaipar',
//         'Dilkusha',
//         'Dilkusha Commercial Area',
//         'Dr. MA Rashid Hall',
//         'East Bashabo',
//         'Eastern Housing',
//         'East Raibazar',
//         'Elephant Road',
//         'Engineering University & Residential Area',
//         'English Road',
//         'Eskaton Garden Road',
//         'Fakirapul',
//         'Fakirapul Market Area',
//         'Farashgang Lane',
//         'Faridabad Lane',
//         'Folder Street',
//         'French Road',
//         'Fulbaria Station East Area',
//         'Ganguly Lane',
//         'Gendaria',
//         'Gendaria Rail Gate',
//         'Ghaji Osman Gani Road',
//         'Golakpal Lane',
//         'Golam Mostafa Lane',
//         'Gopibagh',
//         'Gopinath Dutt Kabiraj Street',
//         'Goran',
//         'Govinda das lane',
//         'Green corner green road',
//         'Green Corner paribag',
//         'Green Road East',
//         'Green Road Staff Quarter',
//         'Green Road West',
//         'Green Square',
//         'Gulbagh',
//         'Gulistan',
//         'Hafiz Ullah Road',
//         'Haji Afsaruddin Road',
//         'Haji Mohammad Moshin Hall',
//         'Hakim Habibur Rahman Road',
//         'Haricharan Roy Road',
//         'Harish chand lane basu street',
//         'Hari Street',
//         'Hatembagh',
//         'Hatirpool Free school Street',
//         'Hatkhola Road',
//         'Hazaribagh',
//         'Hazi mainuddin Road',
//         'High court Staff quarter',
//         'Imam Gang',
//         'Indrapuri',
//         'Jadab Narayandas lane',
//         'Jagannath Hall',
//         'Jatrabari',
//         'Jatrabari Arot',
//         'Jayakali Mandir Road',
//         'Jhauchor',
//         'Judge Court',
//         'K.M Azam Lane',
//         'K.Pk Ghosh Street',
//         'Kadamtala',
//         'Kadamtali',
//         'Kajla',
//         'Kakrail',
//         'Kalabagan',
//         'Kalabagan Free School Street',
//         'Kalma Market',
//         'Kamalapur',
//         'Kamlapur',
//         'Kamrangirchar',
//         'Karimullarbagh',
//         'Kasaituly',
//         'Katherpul Lane',
//         'Kazirbagh',
//         'Kazi Zia uddin Lane',
//         'Kedar Nath',
//         'Khilgaon',
//         'Khilgaon Bagicha',
//         'Khilgaon Colony',
//         'KM Das Lane',
//         'Konapara',
//         'Kutubkhali',
//         'Kuwait friendship hospital',
//         'Lalbagh',
//         'Lalmatia',
//         'Lal Mohan Poddar Lane',
//         'Lalmohan Shah Street',
//         'Large katra',
//         'Madan Mohan Basak Road',
//         'Madanshah Lane',
//         'Madartek',
//         'Madinabagh',
//         'Malakartola Lane',
//         'Malibag',
//         'Malibagh Bazar Road',
//         'Malitola lane',
//         'Maniknagar',
//         'Manik Nagar',
//         'Manik Nagar Miyazan Lane',
//         'Maradia',
//         'Matuail',
//         'Mayakanon',
//         'Merajnagar',
//         'Methorpotty',
//         'Middle Bashabo',
//         'Mill Barracks',
//         'Mintu Road',
//         'Mir Hazaribagh',
//         'Mitali road',
//         'Mitfort Road',
//         'Mogbazar Circuit House Road',
//         'Moghbazar',
//         'Moghbazar TNT colony',
//         'Mohhammadbagh',
//         'Mohini Mohandas Lane',
//         'Mokim Katara',
//         'Momenbagh',
//         'Motijheel',
//         'Motijheel Colony',
//         'Motijheel Commercial Area',
//         'Mugda',
//         'Mugdapara',
//         'Mujahid Nagar',
//         'Municipal Staff Quarter',
//         'Munir Hossain Lane',
//         'Muradpur',
//         'Mymensingh lane',
//         'Nabalka Mia lane',
//         'Narinda Lane',
//         'Narinda Road',
//         'National Museum Quarter',
//         'Naveen Chandra Gombasi Road',
//         'Nawab Deori',
//         'Nawab Katara',
//         'Nawab Street',
//         'Nayapalton',
//         'Nazira Bazar Lane',
//         'Nazrul Islam Hall',
//         'Neki Deori',
//         'New Eskaton Road',
//         'New Jurain Alam Bagh',
//         'New market',
//         'Nilkhet Babupara',
//         'Noor box Lane',
//         'North Bashabo',
//         'North Circular Road',
//         'NorthEast Bashabo',
//         'North Jatrabari',
//         'North Mugdapara Deputy Colony',
//         'North Rajarbagh',
//         'North Road',
//         'NorthWest Jatrabari',
//         'Outer Circular Road',
//         'Padmolochan Roy Lane',
//         'Palamganj',
//         'Pallabi',
//         'Palton',
//         'Paribagh Shah Sahib Road',
//         'Patlakhan Lane',
//         'Patuatuli Lane',
//         'PG Hospital',
//         'Poet Jasim Uddin Hall',
//         'Police Hospital',
//         'Postagola',
//         'Postal Colony',
//         'Purana Paltan GPO',
//         'Purana Paltan Line',
//         'Puran Dhaka - Islampur',
//         'Puran Mogul',
//         'Puran Para',
//         'Railway Hospital area',
//         'Rajabagh Police Line',
//         'Rajani Bose Lane',
//         'Rajani Chowdhury Road',
//         'Rajarbag Police Line',
//         'Rakhal chandra bashak lane',
//         'Ramna',
//         'Rampura',
//         'Rayerbagh',
//         'Rishikosh Das Road',
//         'RK Mission Road',
//         'Roisnagar',
//         'Rokaya Hall',
//         'Rupa das lal lane',
//         'Rupchan Lane',
//         'Sabujbagh',
//         'Saddam Market',
//         'Saidabad',
//         'Salimullah Hall',
//         'Samaswada lane',
//         'Sarulia',
//         'Satish Sarkar Road',
//         'Satmasjid Road',
//         'Sayed hasan Ali Lane',
//         'Secretariat Road',
//         'Segun Bagicha',
//         'Shahbagh',
//         'Shaheed Memorial Hall',
//         'Shahidbagh',
//         'Shahidullah Hall',
//         'Shahjahanpur',
//         'Shahjahanpur Railway Colony',
//         'Shah Shaheb Lane',
//         'Shakhari Bazar Road',
//         'Shakhari Nagar Lane',
//         'Shampur',
//         'Shamsun Nahar Hall',
//         'Shantibagh',
//         'Shantinagar',
//         'Shantinagar Market Area',
//         'Sharat chandra chakraborty lane',
//         'Sharatgupta Road',
//         'Shashibhushan Chaterjee Lane',
//         'Sheikdi',
//         'Sheikh Majibur Rahman Hall',
//         'Sherabangla Hall',
//         'Sher e Bangla Road',
//         'Shukrabad',
//         'Shurwardi Hall',
//         'Siddheshwari Road',
//         'Siddique bazar',
//         'Siddique lane',
//         'Simson Road',
//         'Sir AF Rahman hall',
//         'Sobhanbagh',
//         'Sohidnagar',
//         'Sonali Bank Colony',
//         'South Bashabo',
//         'South East Jatrabari',
//         'South Jatrabari',
//         'South Khilgaon',
//         'South Rajarbagh',
//         'Surya Sen Hall',
//         'Sutrapur',
//         'Swamibagh Lane',
//         'Swamibagh New Township',
//         'Swarighat east',
//         'T & T Colony',
//         'Tallabag',
//         'Tanuganj Lane',
//         'Thakurdas Lane',
//         'Tikatuli',
//         'Tipu Sultan Road',
//         'Titumir Hall',
//         'Topkhana Road',
//         'Toynbee Circular Road',
//         'Traffic Police Barracks',
//         'Ultiganj Lane',
//         'Walter Road',
//         'Wapda Colony',
//         'Wari',
//         'Wari Street',
//         'West Bashabo',
//         'West End Street',
//         'West fulbarai area',
//         'West Jatrabari',
//         'West Juraine',
//         'West Malibag',
//         'West old railway colony',
//         'WHO Mission Road',
//         'Wise Ghat Road',
//         'Yoga Narayans Seal Street',
//         'Zahur Haque Hall',
//         'Ziaur Rahman Hall'
//     ];
//     return (
//         <div className={StyleSheet.area__container}>
//             <div className={StyleSheet.area__container__title}>Area:</div>
//             <div className={StyleSheet.area__container__selected__box}>
//                 <select
//                     onClick={(e) => {
//                         e.target.style.border = '0.13vw solid #da1e37';
//                         e.target.style.backgroundColor = 'white';
//                     }}
//                     style={
//                         areaValue !== 'area'
//                             ? { border: '0.13vw solid #da1e37' }
//                             : { border: 'area', backgroundColor: '#F5F5F5' }
//                     }
//                     name="area"
//                     onChange={(e) => {
//                         areaAction(e.target.value);
//                     }}
//                     value={areaValue}>
//                     <option value="area">Area</option>
//                     {dhakaSouthAreaList.map((area, index) => {
//                         return (
//                             <option value={area} key={index}>
//                                 {area}
//                             </option>
//                         );
//                     })}
//                 </select>
//             </div>
//         </div>
//     );
// }
// function FaridpurArea() {
//     let faridpurAreaList = [
//         'Alfadanga',
//         'Alipur',
//         'Ambikapur',
//         'Ambikapur Board Office',
//         'Baitulaman Housing',
//         'Baitulaman Politecni',
//         'Bakhunda',
//         'Bhanga',
//         'Boalmari',
//         'Bodorpur',
//         'C&B Ghat',
//         'Chorkomlapur',
//         'Chunaghata',
//         'Dhuldi Bazar',
//         'Dhuldi Railgate',
//         'Engineering College',
//         'Faridpur Sadar',
//         'Horishova',
//         'Jhiltuli',
//         'Kanaipur',
//         'Khabaspur',
//         'Kobirpur',
//         'Komlapur',
//         'Komorpur',
//         'Krishi College',
//         'Laler Mor',
//         'Medical',
//         'Mohila Road',
//         'Munshibazar',
//         'New Bus Stand',
//         'Niltuli',
//         'Old Bus Stand',
//         'Onather Mor',
//         'Puran Gazi Bari',
//         'Sovarampur',
//         'Station Bazar',
//         'Tepakhola'
//     ];
//     return (
//         <div className={StyleSheet.area__container}>
//             <div className={StyleSheet.area__container__title}>Area:</div>
//             <div className={StyleSheet.area__container__selected__box}>
//                 <select
//                     onClick={(e) => {
//                         e.target.style.border = '0.13vw solid #da1e37';
//                         e.target.style.backgroundColor = 'white';
//                     }}
//                     style={
//                         areaValue !== 'area'
//                             ? { border: '0.13vw solid #da1e37' }
//                             : { border: 'area', backgroundColor: '#F5F5F5' }
//                     }
//                     name="area"
//                     onChange={(e) => {
//                         areaAction(e.target.value);
//                     }}
//                     value={areaValue}>
//                     <option value="area">Area</option>
//                     {faridpurAreaList.map((area, index) => {
//                         return (
//                             <option value={area} key={index}>
//                                 {area}
//                             </option>
//                         );
//                     })}
//                 </select>
//             </div>
//         </div>
//     );
// }
// function GazipurArea() {
//     let gazipurAreaList = [
//         'Ahmed Nagor Chowrasta',
//         'Ambag',
//         'Anser Academy',
//         'Apex Footwear Factory',
//         'Bahadurpur - Mowna Gazipur',
//         'Bahawalpur College Chowrasta',
//         'Barmi',
//         'Bashon Thana Chowrasta',
//         'Bash Tola',
//         'Bason Sorok',
//         'Boadmill',
//         'Board Bazar',
//         'Bot Tola Auto Stand',
//         'BRRI',
//         'Brtc Chowrasta',
//         'BSCIC',
//         'Caller Bazar',
//         'Chanda Bus Stand',
//         'Chanda Palli Bidyut',
//         'Chowrasta Baypass',
//         'Chowrasta Telipara',
//         'Chowrasta Warelessgate',
//         'Colombia Garments',
//         'Deger Chala road',
//         'Dhakkinan joydebpur',
//         'dhakkin chaybithi',
//         'dhaladia bazar-mowana gazipur',
//         'dhirashom joydebpur',
//         'dird composit-mowna gazipur',
//         'dosh tola',
//         'dukan par',
//         'epsha gate-mowna gazipur',
//         'gazipur sadar',
//         'great wall city',
//         'harikan road',
//         'hazir pukur',
//         'Horinhati',
//         'Islam Garments',
//         'Islamic University',
//         'Jel khana',
//         'Jorun',
//         'Joydebpur Police Line',
//         'Joydebpur Rail Gate',
//         'Kaliakaar',
//         'Kaliganj',
//         'Kamar Juri',
//         'Kashimpur',
//         'Kashimpur Ambag',
//         'Konabari Nawjor',
//         'Konabri College Gate',
//         'Kudusnagor - Nill Nagor',
//         'LIDA Textile',
//         'Maleker Bari',
//         'Masterbari - Mowna Gazipur',
//         'Mazar Road Riad',
//         'Member Bari',
//         'Mirzapur - Mowna Gazipur',
//         'Mogorkal - Doshtola',
//         'Monnunagar',
//         'Mouchak',
//         'National University',
//         'Noyapara - Mowna Gazipur',
//         'Open University',
//         'Palli Bidyut',
//         'Parijat',
//         'Polagach Road',
//         'Purabari - Mowna Gazipur',
//         'Purbachal Stellmill Road',
//         'Rajabari - Mowna Gazipur',
//         'Rajbari Math Joydebpur',
//         'Rajendrapur',
//         'Rajendrapur Cantonment',
//         'Rotonpur Railway',
//         'Salna - Mowna Gazipur',
//         'Satha Bari - Mowna Gazipur',
//         'Shafipur Bazar',
//         'Sharifpur Road',
//         'Shimultoli Joydebpur',
//         'Sign Board',
//         'Sreepur',
//         'Uttor Chayabithi',
//         'Vushir Mill',
//         'Zora Pump'
//     ];
//     return (
//         <div className={StyleSheet.area__container}>
//             <div className={StyleSheet.area__container__title}>Area:</div>
//             <div className={StyleSheet.area__container__selected__box}>
//                 <select
//                     onClick={(e) => {
//                         e.target.style.border = '0.13vw solid #da1e37';
//                         e.target.style.backgroundColor = 'white';
//                     }}
//                     style={
//                         areaValue !== 'area'
//                             ? { border: '0.13vw solid #da1e37' }
//                             : { border: 'area', backgroundColor: '#F5F5F5' }
//                     }
//                     name="area"
//                     onChange={(e) => {
//                         areaAction(e.target.value);
//                     }}
//                     value={areaValue}>
//                     <option value="area">Area</option>
//                     {gazipurAreaList.map((area, index) => {
//                         return (
//                             <option value={area} key={index}>
//                                 {area}
//                             </option>
//                         );
//                     })}
//                 </select>
//             </div>
//         </div>
//     );
// }
// function GopalganjArea() {
//     let gopalganjAreaList = [
//         'Arpara',
//         'Gopalganj Dhaka Dakkhin',
//         'Gopalganj Sadar',
//         'Gopalganj Sadar Ulpur',
//         'Gopinathpur',
//         'Kashiani',
//         'Kashiani Ramdia College',
//         'Kotalipara',
//         'Maksudpur',
//         'Malenga',
//         'Manikher',
//         'Ratoil',
//         'Tungipara',
//         'Vatiapara'
//     ];
//     return (
//         <div className={StyleSheet.area__container}>
//             <div className={StyleSheet.area__container__title}>Area:</div>
//             <div className={StyleSheet.area__container__selected__box}>
//                 <select
//                     onClick={(e) => {
//                         e.target.style.border = '0.13vw solid #da1e37';
//                         e.target.style.backgroundColor = 'white';
//                     }}
//                     style={
//                         areaValue !== 'area'
//                             ? { border: '0.13vw solid #da1e37' }
//                             : { border: 'area', backgroundColor: '#F5F5F5' }
//                     }
//                     name="area"
//                     onChange={(e) => {
//                         areaAction(e.target.value);
//                     }}
//                     value={areaValue}>
//                     <option value="area">Area</option>
//                     {gopalganjAreaList.map((area, index) => {
//                         return (
//                             <option value={area} key={index}>
//                                 {area}
//                             </option>
//                         );
//                     })}
//                 </select>
//             </div>
//         </div>
//     );
// }
// function KeranigonjArea() {
//     let keranigonjAreaList = [
//         'Abdullahpur',
//         'Ati bazar',
//         'basundhara',
//         'Dohar',
//         'Ekuriya',
//         'Hasnabad',
//         'Kaligonj',
//         'Keraniganj Sadar',
//         'Kodomtoly',
//         'Konakhola',
//         'Konda',
//         'Ramerkanda',
//         'Rohitpur',
//         'Stand Bazar',
//         'Zinzira'
//     ];
//     return (
//         <div className={StyleSheet.area__container}>
//             <div className={StyleSheet.area__container__title}>Area:</div>
//             <div className={StyleSheet.area__container__selected__box}>
//                 <select
//                     onClick={(e) => {
//                         e.target.style.border = '0.13vw solid #da1e37';
//                         e.target.style.backgroundColor = 'white';
//                     }}
//                     style={
//                         areaValue !== 'area'
//                             ? { border: '0.13vw solid #da1e37' }
//                             : { border: 'area', backgroundColor: '#F5F5F5' }
//                     }
//                     name="area"
//                     onChange={(e) => {
//                         areaAction(e.target.value);
//                     }}
//                     value={areaValue}>
//                     <option value="area">Area</option>
//                     {keranigonjAreaList.map((area, index) => {
//                         return (
//                             <option value={area} key={index}>
//                                 {area}
//                             </option>
//                         );
//                     })}
//                 </select>
//             </div>
//         </div>
//     );
// }
// function KishoreganjArea() {
//     let kishoreganjAreaList = [
//         'Abdullahpur',
//         'Bajitpur',
//         'Bhairab',
//         'Binnadi Bazar',
//         'Hossenpur',
//         'Josudal Syed Nazrul Islam Medical',
//         'Karimganj',
//         'Katiadi',
//         'Katiadi Gochhihata',
//         'Kishoreganj Chamra Bandar',
//         'Kishoreganj Sadar',
//         'Kishoreganj Sadar S.Mills',
//         'kuliarchar',
//         'Laksmipur',
//         'Maria Industrial City',
//         'MIthamoin',
//         'Nandail Chourasta - Mymensingh Road',
//         'Nilganj Bazar',
//         'Ostagram',
//         'Pakundia',
//         'Pakundia Bazar',
//         'Pulgarhat Bazar',
//         'Sararchar',
//         'Sholakia Area',
//         'Tarial'
//     ];
//     return (
//         <div className={StyleSheet.area__container}>
//             <div className={StyleSheet.area__container__title}>Area:</div>
//             <div className={StyleSheet.area__container__selected__box}>
//                 <select
//                     onClick={(e) => {
//                         e.target.style.border = '0.13vw solid #da1e37';
//                         e.target.style.backgroundColor = 'white';
//                     }}
//                     style={
//                         areaValue !== 'area'
//                             ? { border: '0.13vw solid #da1e37' }
//                             : { border: 'area', backgroundColor: '#F5F5F5' }
//                     }
//                     name="area"
//                     onChange={(e) => {
//                         areaAction(e.target.value);
//                     }}
//                     value={areaValue}>
//                     <option value="area">Area</option>
//                     {kishoreganjAreaList.map((area, index) => {
//                         return (
//                             <option value={area} key={index}>
//                                 {area}
//                             </option>
//                         );
//                     })}
//                 </select>
//             </div>
//         </div>
//     );
// }
// function MadaripurArea() {
//     let madaripurAreaList = [
//         'Adampur',
//         'Arial Khan Ferry Ghat',
//         'Balairkandi',
//         'Charmuguria',
//         'Durgabordi',
//         'Kalkini',
//         'Kazibari',
//         'Khakdi Bus Stand',
//         'Kulpoddi Post Office',
//         'Madaripur Bus Terminal',
//         'Madaripur Police Station',
//         'Madaripur Sadar',
//         'Mostafapur',
//         'Mostafapur Bus Stand',
//         'Panchar',
//         'Puran Bazar',
//         'Rajoir',
//         'Rajoir Khalia',
//         'Sahabrampur',
//         'Shibchar'
//     ];
//     return (
//         <div className={StyleSheet.area__container}>
//             <div className={StyleSheet.area__container__title}>Area:</div>
//             <div className={StyleSheet.area__container__selected__box}>
//                 <select
//                     onClick={(e) => {
//                         e.target.style.border = '0.13vw solid #da1e37';
//                         e.target.style.backgroundColor = 'white';
//                     }}
//                     style={
//                         areaValue !== 'area'
//                             ? { border: '0.13vw solid #da1e37' }
//                             : { border: 'area', backgroundColor: '#F5F5F5' }
//                     }
//                     name="area"
//                     onChange={(e) => {
//                         areaAction(e.target.value);
//                     }}
//                     value={areaValue}>
//                     <option value="area">Area</option>
//                     {madaripurAreaList.map((area, index) => {
//                         return (
//                             <option value={area} key={index}>
//                                 {area}
//                             </option>
//                         );
//                     })}
//                 </select>
//             </div>
//         </div>
//     );
// }
// function ManikganjShibloyaArea() {
//     let manikganjShibloyaAreaList = [
//         'Shibloya Aricha',
//         'Shibloya Shibaloy',
//         'Shibloya Tewta',
//         'Shibloya Uthli'
//     ];
//     return (
//         <div className={StyleSheet.area__container}>
//             <div className={StyleSheet.area__container__title}>Area:</div>
//             <div className={StyleSheet.area__container__selected__box}>
//                 <select
//                     onClick={(e) => {
//                         e.target.style.border = '0.13vw solid #da1e37';
//                         e.target.style.backgroundColor = 'white';
//                     }}
//                     style={
//                         areaValue !== 'area'
//                             ? { border: '0.13vw solid #da1e37' }
//                             : { border: 'area', backgroundColor: '#F5F5F5' }
//                     }
//                     name="area"
//                     onChange={(e) => {
//                         areaAction(e.target.value);
//                     }}
//                     value={areaValue}>
//                     <option value="area">Area</option>
//                     {manikganjShibloyaAreaList.map((area, index) => {
//                         return (
//                             <option value={area} key={index}>
//                                 {area}
//                             </option>
//                         );
//                     })}
//                 </select>
//             </div>
//         </div>
//     );
// }
// function ManikganjSingairArea() {
//     let manikganjSingairAreaList = [
//         'Singair Baira',
//         'Singair Basta Stand',
//         'Singair Joymantop',
//         'Singair Sadar'
//     ];
//     return (
//         <div className={StyleSheet.area__container}>
//             <div className={StyleSheet.area__container__title}>Area:</div>
//             <div className={StyleSheet.area__container__selected__box}>
//                 <select
//                     onClick={(e) => {
//                         e.target.style.border = '0.13vw solid #da1e37';
//                         e.target.style.backgroundColor = 'white';
//                     }}
//                     style={
//                         areaValue !== 'area'
//                             ? { border: '0.13vw solid #da1e37' }
//                             : { border: 'area', backgroundColor: '#F5F5F5' }
//                     }
//                     name="area"
//                     onChange={(e) => {
//                         areaAction(e.target.value);
//                     }}
//                     value={areaValue}>
//                     <option value="area">Area</option>
//                     {manikganjSingairAreaList.map((area, index) => {
//                         return (
//                             <option value={area} key={index}>
//                                 {area}
//                             </option>
//                         );
//                     })}
//                 </select>
//             </div>
//         </div>
//     );
// }
// function ManikganjTownArea() {
//     let manikganjTownAreaList = [
//         'Baliati',
//         'Barangail',
//         'Betila',
//         'Beutha',
//         'Dashora',
//         'Dautiya',
//         'Gheor',
//         'Gilondo',
//         'Gorpara',
//         'Horirampur',
//         'Joyra',
//         'Kachari',
//         'Mahadebpur',
//         'Manikganj Bazar',
//         'Manikganj Doulatpur',
//         'Manikganj Sadar',
//         'Noyadingi',
//         'Purra',
//         'Rajibpur',
//         'Saturia',
//         'Seutha',
//         'Uchutia'
//     ];
//     return (
//         <div className={StyleSheet.area__container}>
//             <div className={StyleSheet.area__container__title}>Area:</div>
//             <div className={StyleSheet.area__container__selected__box}>
//                 <select
//                     onClick={(e) => {
//                         e.target.style.border = '0.13vw solid #da1e37';
//                         e.target.style.backgroundColor = 'white';
//                     }}
//                     style={
//                         areaValue !== 'area'
//                             ? { border: '0.13vw solid #da1e37' }
//                             : { border: 'area', backgroundColor: '#F5F5F5' }
//                     }
//                     name="area"
//                     onChange={(e) => {
//                         areaAction(e.target.value);
//                     }}
//                     value={areaValue}>
//                     <option value="area">Area</option>
//                     {manikganjTownAreaList.map((area, index) => {
//                         return (
//                             <option value={area} key={index}>
//                                 {area}
//                             </option>
//                         );
//                     })}
//                 </select>
//             </div>
//         </div>
//     );
// }
// function MunshiganjGajariaArea() {
//     let munshiganjGajariaAreaList = ['Gajaria Hossendi', 'Gajaria Rasulpur', 'Gajaria Sadar'];
//     return (
//         <div className={StyleSheet.area__container}>
//             <div className={StyleSheet.area__container__title}>Area:</div>
//             <div className={StyleSheet.area__container__selected__box}>
//                 <select
//                     onClick={(e) => {
//                         e.target.style.border = '0.13vw solid #da1e37';
//                         e.target.style.backgroundColor = 'white';
//                     }}
//                     style={
//                         areaValue !== 'area'
//                             ? { border: '0.13vw solid #da1e37' }
//                             : { border: 'area', backgroundColor: '#F5F5F5' }
//                     }
//                     name="area"
//                     onChange={(e) => {
//                         areaAction(e.target.value);
//                     }}
//                     value={areaValue}>
//                     <option value="area">Area</option>
//                     {munshiganjGajariaAreaList.map((area, index) => {
//                         return (
//                             <option value={area} key={index}>
//                                 {area}
//                             </option>
//                         );
//                     })}
//                 </select>
//             </div>
//         </div>
//     );
// }
// function MunshiganjLohajongArea() {
//     let munshiganjLohajongAreaList = [
//         'Lohajong',
//         'Lohajong Gouragonj',
//         'Lohajong Haldia SO',
//         'Lohajong Haridia',
//         'Lohajong Haridia DESO',
//         'Lohajong Korhati',
//         'Lohajong Madini Mandal',
//         'Lohajong Medini Mandal EDSO'
//     ];
//     return (
//         <div className={StyleSheet.area__container}>
//             <div className={StyleSheet.area__container__title}>Area:</div>
//             <div className={StyleSheet.area__container__selected__box}>
//                 <select
//                     onClick={(e) => {
//                         e.target.style.border = '0.13vw solid #da1e37';
//                         e.target.style.backgroundColor = 'white';
//                     }}
//                     style={
//                         areaValue !== 'area'
//                             ? { border: '0.13vw solid #da1e37' }
//                             : { border: 'area', backgroundColor: '#F5F5F5' }
//                     }
//                     name="area"
//                     onChange={(e) => {
//                         areaAction(e.target.value);
//                     }}
//                     value={areaValue}>
//                     <option value="area">Area</option>
//                     {munshiganjLohajongAreaList.map((area, index) => {
//                         return (
//                             <option value={area} key={index}>
//                                 {area}
//                             </option>
//                         );
//                     })}
//                 </select>
//             </div>
//         </div>
//     );
// }
// function MunshiganjSirajdikhanArea() {
//     let munshiganjSirajdikhanAreaList = [
//         'Sirajdikhan',
//         'Sirajdikhan Ichapur',
//         'Sirajdikhan Kola',
//         'Sirajdikhan Malkha Nagar',
//         'Sirajdikhan Shekher Nagar'
//     ];
//     return (
//         <div className={StyleSheet.area__container}>
//             <div className={StyleSheet.area__container__title}>Area:</div>
//             <div className={StyleSheet.area__container__selected__box}>
//                 <select
//                     onClick={(e) => {
//                         e.target.style.border = '0.13vw solid #da1e37';
//                         e.target.style.backgroundColor = 'white';
//                     }}
//                     style={
//                         areaValue !== 'area'
//                             ? { border: '0.13vw solid #da1e37' }
//                             : { border: 'area', backgroundColor: '#F5F5F5' }
//                     }
//                     name="area"
//                     onChange={(e) => {
//                         areaAction(e.target.value);
//                     }}
//                     value={areaValue}>
//                     <option value="area">Area</option>
//                     {munshiganjSirajdikhanAreaList.map((area, index) => {
//                         return (
//                             <option value={area} key={index}>
//                                 {area}
//                             </option>
//                         );
//                     })}
//                 </select>
//             </div>
//         </div>
//     );
// }
// function MunshiganjTownArea() {
//     let munshiganjTownAreaList = [
//         'Baghra',
//         'Bajrajugini',
//         'Baligaon',
//         'Betkahat',
//         'Bhagyakul',
//         'Dighirpar',
//         'Hasail',
//         'Hashara',
//         'Kolapara',
//         'Kumarbhog',
//         'Maijpara',
//         'Munshiganj Sadar Kathakhali',
//         'Munshiganj Sadar Mirkadim',
//         'Munshiganj Sadar Mukterpur',
//         'Munshiganj Sadar Munshiganj Sadar',
//         'Munshiganj Sadar Rikabibazar',
//         'Pura',
//         'Pura EDSO',
//         'Rarikhal',
//         'Sreenagar',
//         'Tangibari',
//         'Vaggyakul SO'
//     ];
//     return (
//         <div className={StyleSheet.area__container}>
//             <div className={StyleSheet.area__container__title}>Area:</div>
//             <div className={StyleSheet.area__container__selected__box}>
//                 <select
//                     onClick={(e) => {
//                         e.target.style.border = '0.13vw solid #da1e37';
//                         e.target.style.backgroundColor = 'white';
//                     }}
//                     style={
//                         areaValue !== 'area'
//                             ? { border: '0.13vw solid #da1e37' }
//                             : { border: 'area', backgroundColor: '#F5F5F5' }
//                     }
//                     name="area"
//                     onChange={(e) => {
//                         areaAction(e.target.value);
//                     }}
//                     value={areaValue}>
//                     <option value="area">Area</option>
//                     {munshiganjTownAreaList.map((area, index) => {
//                         return (
//                             <option value={area} key={index}>
//                                 {area}
//                             </option>
//                         );
//                     })}
//                 </select>
//             </div>
//         </div>
//     );
// }
// function NarayanganjArea() {
//     let narayanganjAreaList = [
//         'Araihazar',
//         'Araihazar Gopaldi',
//         'Baidder Bazar',
//         'Baidder Bazar Bara Nagar',
//         'Baidder Bazar Barodi',
//         'Bandar',
//         'Bandar BIDS',
//         'Bandar D.C Mills',
//         'Fatullah',
//         'Fatullah Bazar',
//         'Madanganj',
//         'Narayanganj Sadar',
//         'Nobiganj',
//         'Rupganj',
//         'Rupganj Bhulta',
//         'Rupganj Kanchan',
//         'Rupganj Murapara',
//         'Rupganj Nagri',
//         'Siddirganj Adamjeenagar',
//         'Siddirganj LN Mills',
//         'Siddirganj Siddirganj'
//     ];
//     return (
//         <div className={StyleSheet.area__container}>
//             <div className={StyleSheet.area__container__title}>Area:</div>
//             <div className={StyleSheet.area__container__selected__box}>
//                 <select
//                     onClick={(e) => {
//                         e.target.style.border = '0.13vw solid #da1e37';
//                         e.target.style.backgroundColor = 'white';
//                     }}
//                     style={
//                         areaValue !== 'area'
//                             ? { border: '0.13vw solid #da1e37' }
//                             : { border: 'area', backgroundColor: '#F5F5F5' }
//                     }
//                     name="area"
//                     onChange={(e) => {
//                         areaAction(e.target.value);
//                     }}
//                     value={areaValue}>
//                     <option value="area">Area</option>
//                     {narayanganjAreaList.map((area, index) => {
//                         return (
//                             <option value={area} key={index}>
//                                 {area}
//                             </option>
//                         );
//                     })}
//                 </select>
//             </div>
//         </div>
//     );
// }
// function NarsingdiArea() {
//     let narsingdiAreaList = [
//         'Basail',
//         'Belabo',
//         'Bilasdi',
//         'Bot-Tola',
//         'Brahmondi',
//         'Char Sindhur',
//         'Chinishpur',
//         'Daspara',
//         'Dogoria',
//         'Ghorashal',
//         'Ghorashal Bazar',
//         'Goradia',
//         'Grorashal Pran Factory',
//         'Grorashal Sarkar Khana',
//         'Hazupur',
//         'Janata Jute Mile',
//         'Kandapara',
//         'Karimpur',
//         'Kawriapara',
//         'Madhabdi',
//         'Monohordi',
//         'Monohordi Hatirdia',
//         'Monohordi Katabaria',
//         'Narsingdi Bazar',
//         'Narsingdi College',
//         'Narsingdi Sadar',
//         'Palash',
//         'Panchdona',
//         'Raypura',
//         'Raypura Bazar Hasnabad',
//         'Raypura Radhaganj bazar',
//         'Saheprotab',
//         'Salidha',
//         'Sarkarkhana',
//         'Satirpara',
//         'Shibpur',
//         'Shilmandi',
//         'Songita',
//         'Torowa',
//         'UMC Jute Mills',
//         'Velanaghar'
//     ];
//     return (
//         <div className={StyleSheet.area__container}>
//             <div className={StyleSheet.area__container__title}>Area:</div>
//             <div className={StyleSheet.area__container__selected__box}>
//                 <select
//                     onClick={(e) => {
//                         e.target.style.border = '0.13vw solid #da1e37';
//                         e.target.style.backgroundColor = 'white';
//                     }}
//                     style={
//                         areaValue !== 'area'
//                             ? { border: '0.13vw solid #da1e37' }
//                             : { border: 'area', backgroundColor: '#F5F5F5' }
//                     }
//                     name="area"
//                     onChange={(e) => {
//                         areaAction(e.target.value);
//                     }}
//                     value={areaValue}>
//                     <option value="area">Area</option>
//                     {narsingdiAreaList.map((area, index) => {
//                         return (
//                             <option value={area} key={index}>
//                                 {area}
//                             </option>
//                         );
//                     })}
//                 </select>
//             </div>
//         </div>
//     );
// }
// function NawabganjArea() {
//     let nawabganjAreaList = ['Bandura', 'Joypara', 'Khanepur', 'Sujapur'];
//     return (
//         <div className={StyleSheet.area__container}>
//             <div className={StyleSheet.area__container__title}>Area:</div>
//             <div className={StyleSheet.area__container__selected__box}>
//                 <select
//                     onClick={(e) => {
//                         e.target.style.border = '0.13vw solid #da1e37';
//                         e.target.style.backgroundColor = 'white';
//                     }}
//                     style={
//                         areaValue !== 'area'
//                             ? { border: '0.13vw solid #da1e37' }
//                             : { border: 'area', backgroundColor: '#F5F5F5' }
//                     }
//                     name="area"
//                     onChange={(e) => {
//                         areaAction(e.target.value);
//                     }}
//                     value={areaValue}>
//                     <option value="area">Area</option>
//                     {nawabganjAreaList.map((area, index) => {
//                         return (
//                             <option value={area} key={index}>
//                                 {area}
//                             </option>
//                         );
//                     })}
//                 </select>
//             </div>
//         </div>
//     );
// }
// function RajbariBaliakandiArea() {
//     let rajbariBaliakandiAreaList = ['baliakandi', 'baliakandi nalia'];
//     return (
//         <div className={StyleSheet.area__container}>
//             <div className={StyleSheet.area__container__title}>Area:</div>
//             <div className={StyleSheet.area__container__selected__box}>
//                 <select
//                     onClick={(e) => {
//                         e.target.style.border = '0.13vw solid #da1e37';
//                         e.target.style.backgroundColor = 'white';
//                     }}
//                     style={
//                         areaValue !== 'area'
//                             ? { border: '0.13vw solid #da1e37' }
//                             : { border: 'area', backgroundColor: '#F5F5F5' }
//                     }
//                     name="area"
//                     onChange={(e) => {
//                         areaAction(e.target.value);
//                     }}
//                     value={areaValue}>
//                     <option value="area">Area</option>
//                     {rajbariBaliakandiAreaList.map((area, index) => {
//                         return (
//                             <option value={area} key={index}>
//                                 {area}
//                             </option>
//                         );
//                     })}
//                 </select>
//             </div>
//         </div>
//     );
// }
// function RajbariPangshaArea() {
//     let rajbariPangshaAreaList = [
//         'Pangsha Mrigibazar',
//         'Pangsha Ramkol',
//         'Pangsha Ratandia',
//         'Pangsha Sadar'
//     ];
//     return (
//         <div className={StyleSheet.area__container}>
//             <div className={StyleSheet.area__container__title}>Area:</div>
//             <div className={StyleSheet.area__container__selected__box}>
//                 <select
//                     onClick={(e) => {
//                         e.target.style.border = '0.13vw solid #da1e37';
//                         e.target.style.backgroundColor = 'white';
//                     }}
//                     style={
//                         areaValue !== 'area'
//                             ? { border: '0.13vw solid #da1e37' }
//                             : { border: 'area', backgroundColor: '#F5F5F5' }
//                     }
//                     name="area"
//                     onChange={(e) => {
//                         areaAction(e.target.value);
//                     }}
//                     value={areaValue}>
//                     <option value="area">Area</option>
//                     {rajbariPangshaAreaList.map((area, index) => {
//                         return (
//                             <option value={area} key={index}>
//                                 {area}
//                             </option>
//                         );
//                     })}
//                 </select>
//             </div>
//         </div>
//     );
// }
// function RajbariTownArea() {
//     let rajbariTownAreaList = [
//         'Aladipur',
//         'Banibaha',
//         'Bank Para',
//         'Bash Hata',
//         'Beradanga',
//         'Bhabanipur',
//         'Boro Laxmipur',
//         'Choto Bridge Khankhanapur',
//         'Dewan Para',
//         'Doulodia Ghat',
//         'Doulodia Rail Station',
//         'Doulodia Sign Board',
//         'Doulodia Union Boad',
//         'Fire Service Goalanda',
//         'Goalanda Hospital',
//         'Goalanda Mor',
//         'Goalanda Railgate',
//         'Jomider Bridge',
//         'Kazibadha',
//         'Kazikanda',
//         'Kenala Ghat',
//         'Khanapur Notun Bazar',
//         'Khankhanapur',
//         'Kollanpur',
//         'Lokkhikul',
//         'Mallaguti Bridge Goalanda',
//         'Matir Para',
//         'Mondalpara',
//         'Panna Chottor',
//         'Puran Honisova',
//         'Rajbari Bag Mara',
//         'Rajbari Bazar',
//         'Rajbari Binodpur',
//         'Rajbari Boropul',
//         'Rajbari Bscic',
//         'Rajbari College Para',
//         'Rajbari Gudar Bazar',
//         'Rajbari Jailkhana',
//         'Rajbari Jamtola',
//         'Rajbari Jutemil',
//         'Rajbari Notun Para',
//         'Rajbari Police Line',
//         'Rajbari Public Health',
//         'Rajbari Railgate',
//         'Rajbari Sadar',
//         'Rajbari Sadar Goalanda',
//         'Rajbari Sadar Hospital Road',
//         'Rajbari Sadar Khankhanapur',
//         'Rajbari Sreepur',
//         'Rajbari Terminal',
//         'Sajankanda',
//         'Surjo Nagar',
//         'Vagolpur'
//     ];
//     return (
//         <div className={StyleSheet.area__container}>
//             <div className={StyleSheet.area__container__title}>Area:</div>
//             <div className={StyleSheet.area__container__selected__box}>
//                 <select
//                     onClick={(e) => {
//                         e.target.style.border = '0.13vw solid #da1e37';
//                         e.target.style.backgroundColor = 'white';
//                     }}
//                     style={
//                         areaValue !== 'area'
//                             ? { border: '0.13vw solid #da1e37' }
//                             : { border: 'area', backgroundColor: '#F5F5F5' }
//                     }
//                     name="area"
//                     onChange={(e) => {
//                         areaAction(e.target.value);
//                     }}
//                     value={areaValue}>
//                     <option value="area">Area</option>
//                     {rajbariTownAreaList.map((area, index) => {
//                         return (
//                             <option value={area} key={index}>
//                                 {area}
//                             </option>
//                         );
//                     })}
//                 </select>
//             </div>
//         </div>
//     );
// }
// function SavarArea() {
//     let savarAreaList = [
//         'Ashulia Paragram',
//         'Ashulia Tongabari',
//         'Hemayetpur Jainabari',
//         'Hemayetpur Shampur',
//         'Hemayetpur Tatulzhora Mor',
//         'Jahangirnagar University',
//         'Kashem Cotton Mills',
//         'Rajphulbaria',
//         'Savar Akran Bazaar',
//         'Savar Amin Bazar',
//         'Savar Aralia Bazar Jame Mosjid',
//         'Savar Ashulia Stand',
//         'Savar Baipayl',
//         'Savar Bank Colony',
//         'Savar Bank Town',
//         'Savar Baroipara',
//         'Savar Basp',
//         'Savar Boliarpur',
//         'Savar Bus Stand',
//         'Savar Cantonment',
//         'Savar Canttonment',
//         'Savar Chakrobarti Stand',
//         'Savar Chandra Stand',
//         'Savar Chapain Road',
//         'Savar Charabag More',
//         'Savar CRP',
//         'Savar Dairy Farm',
//         'Savar Dhamrai Thana',
//         'Savar Dhulivita Stand',
//         'Savar Enam Medical College',
//         'Savar EPZ',
//         'Savar Genda',
//         'Savar Gonoshastaya Kendra',
//         'Savar Hemayetpur',
//         'Savar Jamgara',
//         'Savar Kacha Bazar',
//         'Savar Kalampur Bazar',
//         'Savar Kalampur Bus Stand',
//         'Savar Khagan Bazar',
//         'Savar Nama Bazar',
//         'Savar Narshinghapur',
//         'Savar Nayarhat Stand',
//         'Savar New Depz',
//         'Savar Nishchintapur Stand',
//         'Savar Nobinagar',
//         'Savar Old Depz',
//         'Savar Polli Biddyut',
//         'Savar Radio Colony',
//         'Savar Rajashon',
//         'Savar Sadar',
//         'Savar Sorkar Market',
//         'Savar Sreepur Stand',
//         'Savar Thana Stand',
//         'Savar Zirabo',
//         'Saver P.A.T.C'
//     ];
//     return (
//         <div className={StyleSheet.area__container}>
//             <div className={StyleSheet.area__container__title}>Area:</div>
//             <div className={StyleSheet.area__container__selected__box}>
//                 <select
//                     onClick={(e) => {
//                         e.target.style.border = '0.13vw solid #da1e37';
//                         e.target.style.backgroundColor = 'white';
//                     }}
//                     style={
//                         areaValue !== 'area'
//                             ? { border: '0.13vw solid #da1e37' }
//                             : { border: 'area', backgroundColor: '#F5F5F5' }
//                     }
//                     name="area"
//                     onChange={(e) => {
//                         areaAction(e.target.value);
//                     }}
//                     value={areaValue}>
//                     <option value="area">Area</option>
//                     {savarAreaList.map((area, index) => {
//                         return (
//                             <option value={area} key={index}>
//                                 {area}
//                             </option>
//                         );
//                     })}
//                 </select>
//             </div>
//         </div>
//     );
// }
// function ShariatpurNariaArea() {
//     let shariatpurNariaAreaList = [
//         'Naria Bhozeshwar',
//         'Naria Gharisar',
//         'Naria Kartikpur',
//         'Naria Sadar',
//         'Naria Upshi'
//     ];
//     return (
//         <div className={StyleSheet.area__container}>
//             <div className={StyleSheet.area__container__title}>Area:</div>
//             <div className={StyleSheet.area__container__selected__box}>
//                 <select
//                     onClick={(e) => {
//                         e.target.style.border = '0.13vw solid #da1e37';
//                         e.target.style.backgroundColor = 'white';
//                     }}
//                     style={
//                         areaValue !== 'area'
//                             ? { border: '0.13vw solid #da1e37' }
//                             : { border: 'area', backgroundColor: '#F5F5F5' }
//                     }
//                     name="area"
//                     onChange={(e) => {
//                         areaAction(e.target.value);
//                     }}
//                     value={areaValue}>
//                     <option value="area">Area</option>
//                     {shariatpurNariaAreaList.map((area, index) => {
//                         return (
//                             <option value={area} key={index}>
//                                 {area}
//                             </option>
//                         );
//                     })}
//                 </select>
//             </div>
//         </div>
//     );
// }
// function ShariatpurTownArea() {
//     let shariatpurTownAreaList = [
//         'Bhedorganj',
//         'Damudhya',
//         'Dashatta',
//         'Dhanuka Police Line',
//         'Gosairhat',
//         'Jajira',
//         'Kagdi Bazar',
//         'Palong Bazar',
//         'Shariatpur Sadar',
//         'Shariatpur Sadar Angaria',
//         'Shariatpur Sadar Chikandi',
//         'Tulasar'
//     ];
//     return (
//         <div className={StyleSheet.area__container}>
//             <div className={StyleSheet.area__container__title}>Area:</div>
//             <div className={StyleSheet.area__container__selected__box}>
//                 <select
//                     onClick={(e) => {
//                         e.target.style.border = '0.13vw solid #da1e37';
//                         e.target.style.backgroundColor = 'white';
//                     }}
//                     style={
//                         areaValue !== 'area'
//                             ? { border: '0.13vw solid #da1e37' }
//                             : { border: 'area', backgroundColor: '#F5F5F5' }
//                     }
//                     name="area"
//                     onChange={(e) => {
//                         areaAction(e.target.value);
//                     }}
//                     value={areaValue}>
//                     <option value="area">Area</option>
//                     {shariatpurTownAreaList.map((area, index) => {
//                         return (
//                             <option value={area} key={index}>
//                                 {area}
//                             </option>
//                         );
//                     })}
//                 </select>
//             </div>
//         </div>
//     );
// }
// function TangailBasailArea() {
//     let tangailBasailAreaList = ['Bagil', 'Basail Bazar', 'Basail Sadar'];
//     return (
//         <div className={StyleSheet.area__container}>
//             <div className={StyleSheet.area__container__title}>Area:</div>
//             <div className={StyleSheet.area__container__selected__box}>
//                 <select
//                     onClick={(e) => {
//                         e.target.style.border = '0.13vw solid #da1e37';
//                         e.target.style.backgroundColor = 'white';
//                     }}
//                     style={
//                         areaValue !== 'area'
//                             ? { border: '0.13vw solid #da1e37' }
//                             : { border: 'area', backgroundColor: '#F5F5F5' }
//                     }
//                     name="area"
//                     onChange={(e) => {
//                         areaAction(e.target.value);
//                     }}
//                     value={areaValue}>
//                     <option value="area">Area</option>
//                     {tangailBasailAreaList.map((area, index) => {
//                         return (
//                             <option value={area} key={index}>
//                                 {area}
//                             </option>
//                         );
//                     })}
//                 </select>
//             </div>
//         </div>
//     );
// }
// function TangailBhuapurArea() {
//     let tangailBhuapurAreaList = ['bhuapur sadar'];
//     return (
//         <div className={StyleSheet.area__container}>
//             <div className={StyleSheet.area__container__title}>Area:</div>
//             <div className={StyleSheet.area__container__selected__box}>
//                 <select
//                     onClick={(e) => {
//                         e.target.style.border = '0.13vw solid #da1e37';
//                         e.target.style.backgroundColor = 'white';
//                     }}
//                     style={
//                         areaValue !== 'area'
//                             ? { border: '0.13vw solid #da1e37' }
//                             : { border: 'area', backgroundColor: '#F5F5F5' }
//                     }
//                     name="area"
//                     onChange={(e) => {
//                         areaAction(e.target.value);
//                     }}
//                     value={areaValue}>
//                     <option value="area">Area</option>
//                     {tangailBhuapurAreaList.map((area, index) => {
//                         return (
//                             <option value={area} key={index}>
//                                 {area}
//                             </option>
//                         );
//                     })}
//                 </select>
//             </div>
//         </div>
//     );
// }
// function TangailDeldurArea() {
//     let tangailDeldurAreaList = [
//         'Delduar Elasin',
//         'Delduar Hinga Nagar',
//         'Delduar Jangalia',
//         'Delduar Lowhati',
//         'Delduar Patharail',
//         'Delduar Saddar'
//     ];
//     return (
//         <div className={StyleSheet.area__container}>
//             <div className={StyleSheet.area__container__title}>Area:</div>
//             <div className={StyleSheet.area__container__selected__box}>
//                 <select
//                     onClick={(e) => {
//                         e.target.style.border = '0.13vw solid #da1e37';
//                         e.target.style.backgroundColor = 'white';
//                     }}
//                     style={
//                         areaValue !== 'area'
//                             ? { border: '0.13vw solid #da1e37' }
//                             : { border: 'area', backgroundColor: '#F5F5F5' }
//                     }
//                     name="area"
//                     onChange={(e) => {
//                         areaAction(e.target.value);
//                     }}
//                     value={areaValue}>
//                     <option value="area">Area</option>
//                     {tangailDeldurAreaList.map((area, index) => {
//                         return (
//                             <option value={area} key={index}>
//                                 {area}
//                             </option>
//                         );
//                     })}
//                 </select>
//             </div>
//         </div>
//     );
// }
// function TangailGhatailArea() {
//     let tangailGhatailAreaList = [
//         'Ghatail D. Pakutia',
//         'Ghatail Dhalapara',
//         'Ghatail Lohani',
//         'Ghatail Saddar',
//         'Ghatail Zahidganj'
//     ];
//     return (
//         <div className={StyleSheet.area__container}>
//             <div className={StyleSheet.area__container__title}>Area:</div>
//             <div className={StyleSheet.area__container__selected__box}>
//                 <select
//                     onClick={(e) => {
//                         e.target.style.border = '0.13vw solid #da1e37';
//                         e.target.style.backgroundColor = 'white';
//                     }}
//                     style={
//                         areaValue !== 'area'
//                             ? { border: '0.13vw solid #da1e37' }
//                             : { border: 'area', backgroundColor: '#F5F5F5' }
//                     }
//                     name="area"
//                     onChange={(e) => {
//                         areaAction(e.target.value);
//                     }}
//                     value={areaValue}>
//                     <option value="area">Area</option>
//                     {tangailGhatailAreaList.map((area, index) => {
//                         return (
//                             <option value={area} key={index}>
//                                 {area}
//                             </option>
//                         );
//                     })}
//                 </select>
//             </div>
//         </div>
//     );
// }
// function TangailGopalpurArea() {
//     let tangailGopalpurAreaList = [
//         'Gopalpur Chatutia',
//         'Gopalpur Hemnagar',
//         'Gopalpur Jhowail',
//         'Gopalpur Saddar'
//     ];
//     return (
//         <div className={StyleSheet.area__container}>
//             <div className={StyleSheet.area__container__title}>Area:</div>
//             <div className={StyleSheet.area__container__selected__box}>
//                 <select
//                     onClick={(e) => {
//                         e.target.style.border = '0.13vw solid #da1e37';
//                         e.target.style.backgroundColor = 'white';
//                     }}
//                     style={
//                         areaValue !== 'area'
//                             ? { border: '0.13vw solid #da1e37' }
//                             : { border: 'area', backgroundColor: '#F5F5F5' }
//                     }
//                     name="area"
//                     onChange={(e) => {
//                         areaAction(e.target.value);
//                     }}
//                     value={areaValue}>
//                     <option value="area">Area</option>
//                     {tangailGopalpurAreaList.map((area, index) => {
//                         return (
//                             <option value={area} key={index}>
//                                 {area}
//                             </option>
//                         );
//                     })}
//                 </select>
//             </div>
//         </div>
//     );
// }
// function TangailKalihatiArea() {
//     let tangailKalihatiAreaList = [
//         'Kalihati Ballabazar',
//         'Kalihati Elinga',
//         'Kalihati Kalihati',
//         'Kalihati Nagarbari',
//         'Kalihati Nagarbari SO',
//         'Kalihati Nagbari',
//         'Kalihati Palisha',
//         'Kalihati Rajafair'
//     ];
//     return (
//         <div className={StyleSheet.area__container}>
//             <div className={StyleSheet.area__container__title}>Area:</div>
//             <div className={StyleSheet.area__container__selected__box}>
//                 <select
//                     onClick={(e) => {
//                         e.target.style.border = '0.13vw solid #da1e37';
//                         e.target.style.backgroundColor = 'white';
//                     }}
//                     style={
//                         areaValue !== 'area'
//                             ? { border: '0.13vw solid #da1e37' }
//                             : { border: 'area', backgroundColor: '#F5F5F5' }
//                     }
//                     name="area"
//                     onChange={(e) => {
//                         areaAction(e.target.value);
//                     }}
//                     value={areaValue}>
//                     <option value="area">Area</option>
//                     {tangailKalihatiAreaList.map((area, index) => {
//                         return (
//                             <option value={area} key={index}>
//                                 {area}
//                             </option>
//                         );
//                     })}
//                 </select>
//             </div>
//         </div>
//     );
// }
// function TangailKashkawliaArea() {
//     let tangailKashkawliaAreaList = ['kashkawlia'];
//     return (
//         <div className={StyleSheet.area__container}>
//             <div className={StyleSheet.area__container__title}>Area:</div>
//             <div className={StyleSheet.area__container__selected__box}>
//                 <select
//                     onClick={(e) => {
//                         e.target.style.border = '0.13vw solid #da1e37';
//                         e.target.style.backgroundColor = 'white';
//                     }}
//                     style={
//                         areaValue !== 'area'
//                             ? { border: '0.13vw solid #da1e37' }
//                             : { border: 'area', backgroundColor: '#F5F5F5' }
//                     }
//                     name="area"
//                     onChange={(e) => {
//                         areaAction(e.target.value);
//                     }}
//                     value={areaValue}>
//                     <option value="area">Area</option>
//                     {tangailKashkawliaAreaList.map((area, index) => {
//                         return (
//                             <option value={area} key={index}>
//                                 {area}
//                             </option>
//                         );
//                     })}
//                 </select>
//             </div>
//         </div>
//     );
// }
// function TangailMadhupurArea() {
//     let tangailMadhupurAreaList = ['madhupur', 'madhupur dhobari'];
//     return (
//         <div className={StyleSheet.area__container}>
//             <div className={StyleSheet.area__container__title}>Area:</div>
//             <div className={StyleSheet.area__container__selected__box}>
//                 <select
//                     onClick={(e) => {
//                         e.target.style.border = '0.13vw solid #da1e37';
//                         e.target.style.backgroundColor = 'white';
//                     }}
//                     style={
//                         areaValue !== 'area'
//                             ? { border: '0.13vw solid #da1e37' }
//                             : { border: 'area', backgroundColor: '#F5F5F5' }
//                     }
//                     name="area"
//                     onChange={(e) => {
//                         areaAction(e.target.value);
//                     }}
//                     value={areaValue}>
//                     <option value="area">Area</option>
//                     {tangailMadhupurAreaList.map((area, index) => {
//                         return (
//                             <option value={area} key={index}>
//                                 {area}
//                             </option>
//                         );
//                     })}
//                 </select>
//             </div>
//         </div>
//     );
// }
// function TangailMirzapurArea() {
//     let tangailMirzapurArea = [
//         'Mirzapur Gorai',
//         'Mirzapur Jarmuki',
//         'Mirzapur M.C. College',
//         'Mirzapur Mohera',
//         'Mirzapur Saddar',
//         'Mirzapur Warri paikpara'
//     ];
//     return (
//         <div className={StyleSheet.area__container}>
//             <div className={StyleSheet.area__container__title}>Area:</div>
//             <div className={StyleSheet.area__container__selected__box}>
//                 <select
//                     onClick={(e) => {
//                         e.target.style.border = '0.13vw solid #da1e37';
//                         e.target.style.backgroundColor = 'white';
//                     }}
//                     style={
//                         areaValue !== 'area'
//                             ? { border: '0.13vw solid #da1e37' }
//                             : { border: 'area', backgroundColor: '#F5F5F5' }
//                     }
//                     name="area"
//                     onChange={(e) => {
//                         areaAction(e.target.value);
//                     }}
//                     value={areaValue}>
//                     <option value="area">Area</option>
//                     {tangailMirzapurArea.map((area, index) => {
//                         return (
//                             <option value={area} key={index}>
//                                 {area}
//                             </option>
//                         );
//                     })}
//                 </select>
//             </div>
//         </div>
//     );
// }
// function TangailNagarpurArea() {
//     let tangailNagarpurAreaList = ['Nagarpur Dhuburia', 'Nagarpur Sadar', 'Nagarpur Salimabad'];
//     return (
//         <div className={StyleSheet.area__container}>
//             <div className={StyleSheet.area__container__title}>Area:</div>
//             <div className={StyleSheet.area__container__selected__box}>
//                 <select
//                     onClick={(e) => {
//                         e.target.style.border = '0.13vw solid #da1e37';
//                         e.target.style.backgroundColor = 'white';
//                     }}
//                     style={
//                         areaValue !== 'area'
//                             ? { border: '0.13vw solid #da1e37' }
//                             : { border: 'area', backgroundColor: '#F5F5F5' }
//                     }
//                     name="area"
//                     onChange={(e) => {
//                         areaAction(e.target.value);
//                     }}
//                     value={areaValue}>
//                     <option value="area">Area</option>
//                     {tangailNagarpurAreaList.map((area, index) => {
//                         return (
//                             <option value={area} key={index}>
//                                 {area}
//                             </option>
//                         );
//                     })}
//                 </select>
//             </div>
//         </div>
//     );
// }
// function TangailSakhipurArea() {
//     let tangailSakhipurArea = ['sakhipur kochua', 'sakhipur sadar'];
//     return (
//         <div className={StyleSheet.area__container}>
//             <div className={StyleSheet.area__container__title}>Area:</div>
//             <div className={StyleSheet.area__container__selected__box}>
//                 <select
//                     onClick={(e) => {
//                         e.target.style.border = '0.13vw solid #da1e37';
//                         e.target.style.backgroundColor = 'white';
//                     }}
//                     style={
//                         areaValue !== 'area'
//                             ? { border: '0.13vw solid #da1e37' }
//                             : { border: 'area', backgroundColor: '#F5F5F5' }
//                     }
//                     name="area"
//                     onChange={(e) => {
//                         areaAction(e.target.value);
//                     }}
//                     value={areaValue}>
//                     <option value="area">Area</option>
//                     {tangailSakhipurArea.map((area, index) => {
//                         return (
//                             <option value={area} key={index}>
//                                 {area}
//                             </option>
//                         );
//                     })}
//                 </select>
//             </div>
//         </div>
//     );
// }
// function TangailTownArea() {
//     let tangailTownAreaList = [
//         'Charabari',
//         'Elanga',
//         'Gala',
//         'Jugni Bazar',
//         'Kasil',
//         'Potol Bazar',
//         'Pugli',
//         'Rosulpur',
//         'Salimpur',
//         'Soto Basail',
//         'Tangail Sadar',
//         'Tangail Sadar Kagmari',
//         'Tangail Sadar Karatia',
//         'Tangail Sadar Porabari',
//         'Tangail Sadar Santosh',
//         'Tarotiya',
//         'Vaita',
//         'Vatkora'
//     ];
//     return (
//         <div className={StyleSheet.area__container}>
//             <div className={StyleSheet.area__container__title}>Area:</div>
//             <div className={StyleSheet.area__container__selected__box}>
//                 <select
//                     onClick={(e) => {
//                         e.target.style.border = '0.13vw solid #da1e37';
//                         e.target.style.backgroundColor = 'white';
//                     }}
//                     style={
//                         areaValue !== 'area'
//                             ? { border: '0.13vw solid #da1e37' }
//                             : { border: 'area', backgroundColor: '#F5F5F5' }
//                     }
//                     name="area"
//                     onChange={(e) => {
//                         areaAction(e.target.value);
//                     }}
//                     value={areaValue}>
//                     <option value="area">Area</option>
//                     {tangailTownAreaList.map((area, index) => {
//                         return (
//                             <option value={area} key={index}>
//                                 {area}
//                             </option>
//                         );
//                     })}
//                 </select>
//             </div>
//         </div>
//     );
// }
// function TongiArea() {
//     let tongiAreaList = [
//         '27 Bus Stand',
//         'Arichpur',
//         'Badham',
//         'Besic-fokir market',
//         'Besic industrial area',
//         'Beximco',
//         'Bonomala',
//         'Boro bari',
//         'Cherag Ali',
//         'Dewra',
//         'Gazipura',
//         'International madical',
//         'Jhinu market',
//         'Mail gate',
//         'Mirarbazar',
//         'Mirash para',
//         'Pagar',
//         'Shilmoon',
//         'Shinbari',
//         'Targach',
//         'Tongi bazar',
//         'Tongi college gate',
//         'Tongi Sadar',
//         'Tongi Station Road'
//     ];
//     return (
//         <div className={StyleSheet.area__container}>
//             <div className={StyleSheet.area__container__title}>Area:</div>
//             <div className={StyleSheet.area__container__selected__box}>
//                 <select
//                     onClick={(e) => {
//                         e.target.style.border = '0.13vw solid #da1e37';
//                         e.target.style.backgroundColor = 'white';
//                     }}
//                     style={
//                         areaValue !== 'area'
//                             ? { border: '0.13vw solid #da1e37' }
//                             : { border: 'area', backgroundColor: '#F5F5F5' }
//                     }
//                     name="area"
//                     onChange={(e) => {
//                         areaAction(e.target.value);
//                     }}
//                     value={areaValue}>
//                     <option value="area">Area</option>
//                     {tongiAreaList.map((area, index) => {
//                         return (
//                             <option value={area} key={index}>
//                                 {area}
//                             </option>
//                         );
//                     })}
//                 </select>
//             </div>
//         </div>
//     );
// }
// // dhaka all area end

// // khulna all area start
// function BagerhatArea() {
//     let bagerhatAreaList = [
//         'Bagerhat Feri Ghat',
//         'Bagerhat Launch Terminal',
//         'Bagerhat Sadar',
//         'Barabaria',
//         'Bhanganpar Bazar',
//         'Chalna Ankorage',
//         'Charkulia',
//         'Chitalmari',
//         'Dariala',
//         'Fakirhat',
//         'Foylahat',
//         'Gourambha',
//         'Kachua',
//         'Kahalpur',
//         'Khardwar',
//         'Mansa',
//         'Mollahat',
//         'Mongla Port',
//         'Moniganj',
//         'Morrelganj',
//         'Nagarkandi',
//         'P.C College',
//         'Pak Gangni',
//         'Rampal',
//         'Rangdia',
//         'Rayenda',
//         'Sannasi Bazar',
//         'Satgombuj',
//         'Sonarkola',
//         'Sonatunia',
//         'Telisatee'
//     ];
//     return (
//         <div className={StyleSheet.area__container}>
//             <div className={StyleSheet.area__container__title}>Area:</div>
//             <div className={StyleSheet.area__container__selected__box}>
//                 <select
//                     onClick={(e) => {
//                         e.target.style.border = '0.13vw solid #da1e37';
//                         e.target.style.backgroundColor = 'white';
//                     }}
//                     style={
//                         areaValue !== 'area'
//                             ? { border: '0.13vw solid #da1e37' }
//                             : { border: 'area', backgroundColor: '#F5F5F5' }
//                     }
//                     name="area"
//                     onChange={(e) => {
//                         areaAction(e.target.value);
//                     }}
//                     value={areaValue}>
//                     <option value="area">Area</option>
//                     {bagerhatAreaList.map((area, index) => {
//                         return (
//                             <option value={area} key={index}>
//                                 {area}
//                             </option>
//                         );
//                     })}
//                 </select>
//             </div>
//         </div>
//     );
// }
// function ChuadangaArea() {
//     let chuadangaAreaList = [
//         'Alamdanga',
//         'Alukdia',
//         'Andulbaria',
//         'Chuadanga Boalmari',
//         'Chuadanga P.T.I',
//         'Chuadanga Sadar',
//         'Damurhuda',
//         'Darshana',
//         'Dingedah',
//         'Doulatganj',
//         'Doulotdiar',
//         'Gaid Ghat',
//         'Hardi',
//         'Hatikata Mor',
//         'Hat Kalugonj',
//         'Hazrahati',
//         'Hoidarpur',
//         'Joforpur',
//         'Mominpur',
//         'Munshiganj',
//         'Nilmoniganj',
//         'Nur Nagar',
//         'Sath Gari Mor',
//         'Sorojganj',
//         'Subdia',
//         'Valaipur'
//     ];
//     return (
//         <div className={StyleSheet.area__container}>
//             <div className={StyleSheet.area__container__title}>Area:</div>
//             <div className={StyleSheet.area__container__selected__box}>
//                 <select
//                     onClick={(e) => {
//                         e.target.style.border = '0.13vw solid #da1e37';
//                         e.target.style.backgroundColor = 'white';
//                     }}
//                     style={
//                         areaValue !== 'area'
//                             ? { border: '0.13vw solid #da1e37' }
//                             : { border: 'area', backgroundColor: '#F5F5F5' }
//                     }
//                     name="area"
//                     onChange={(e) => {
//                         areaAction(e.target.value);
//                     }}
//                     value={areaValue}>
//                     <option value="area">Area</option>
//                     {chuadangaAreaList.map((area, index) => {
//                         return (
//                             <option value={area} key={index}>
//                                 {area}
//                             </option>
//                         );
//                     })}
//                 </select>
//             </div>
//         </div>
//     );
// }
// function JashoreArea() {
//     let jashoreAreaList = [
//         'Bagachra',
//         'Bagherpara',
//         'Basundia',
//         'Benapole',
//         'Bhugilhat',
//         'Chanchra',
//         'Chougachha',
//         'Churamankathi',
//         'Gouranagar',
//         'Jadabpur',
//         'Jashore Airbach',
//         'Jashore Cantonment',
//         'Jessore Noapara',
//         'Jashore Sadar',
//         'Jashore Upa - Shahar',
//         'Jhikargachha',
//         'Keshobpur',
//         'Monirampur',
//         'Rajarhat',
//         'Rupdia',
//         'Sarsa'
//     ];
//     return (
//         <div className={StyleSheet.area__container}>
//             <div className={StyleSheet.area__container__title}>Area:</div>
//             <div className={StyleSheet.area__container__selected__box}>
//                 <select
//                     onClick={(e) => {
//                         e.target.style.border = '0.13vw solid #da1e37';
//                         e.target.style.backgroundColor = 'white';
//                     }}
//                     style={
//                         areaValue !== 'area'
//                             ? { border: '0.13vw solid #da1e37' }
//                             : { border: 'area', backgroundColor: '#F5F5F5' }
//                     }
//                     name="area"
//                     onChange={(e) => {
//                         areaAction(e.target.value);
//                     }}
//                     value={areaValue}>
//                     <option value="area">Area</option>
//                     {jashoreAreaList.map((area, index) => {
//                         return (
//                             <option value={area} key={index}>
//                                 {area}
//                             </option>
//                         );
//                     })}
//                 </select>
//             </div>
//         </div>
//     );
// }
// function JhenaidahArea() {
//     let jhenaidahAreaList = [
//         'Dobila',
//         'Harinakundu',
//         'Hatgopalpur Bazar',
//         'Jakaria',
//         'Jhenaidah Cadet College',
//         'Jhenaidah Sadar',
//         'Kangshee',
//         'Kotchandpur',
//         'Maheshpur',
//         'Mayadhorpur Village',
//         'Naldanga',
//         'Shailakupa'
//     ];
//     return (
//         <div className={StyleSheet.area__container}>
//             <div className={StyleSheet.area__container__title}>Area:</div>
//             <div className={StyleSheet.area__container__selected__box}>
//                 <select
//                     onClick={(e) => {
//                         e.target.style.border = '0.13vw solid #da1e37';
//                         e.target.style.backgroundColor = 'white';
//                     }}
//                     style={
//                         areaValue !== 'area'
//                             ? { border: '0.13vw solid #da1e37' }
//                             : { border: 'area', backgroundColor: '#F5F5F5' }
//                     }
//                     name="area"
//                     onChange={(e) => {
//                         areaAction(e.target.value);
//                     }}
//                     value={areaValue}>
//                     <option value="area">Area</option>
//                     {jhenaidahAreaList.map((area, index) => {
//                         return (
//                             <option value={area} key={index}>
//                                 {area}
//                             </option>
//                         );
//                     })}
//                 </select>
//             </div>
//         </div>
//     );
// }
// function KhulnaAlipurArea() {
//     let khulnaAlipurAreaList = ['Alaipur Sadar', 'Belphulia', 'Rupsha'];
//     return (
//         <div className={StyleSheet.area__container}>
//             <div className={StyleSheet.area__container__title}>Area:</div>
//             <div className={StyleSheet.area__container__selected__box}>
//                 <select
//                     onClick={(e) => {
//                         e.target.style.border = '0.13vw solid #da1e37';
//                         e.target.style.backgroundColor = 'white';
//                     }}
//                     style={
//                         areaValue !== 'area'
//                             ? { border: '0.13vw solid #da1e37' }
//                             : { border: 'area', backgroundColor: '#F5F5F5' }
//                     }
//                     name="area"
//                     onChange={(e) => {
//                         areaAction(e.target.value);
//                     }}
//                     value={areaValue}>
//                     <option value="area">Area</option>
//                     {khulnaAlipurAreaList.map((area, index) => {
//                         return (
//                             <option value={area} key={index}>
//                                 {area}
//                             </option>
//                         );
//                     })}
//                 </select>
//             </div>
//         </div>
//     );
// }
// function KhulnaAmadeeArea() {
//     let khulnaAmadeeAreaList = ['amadee sadar'];

//     return (
//         <div className={StyleSheet.area__container}>
//             <div className={StyleSheet.area__container__title}>Area:</div>
//             <div className={StyleSheet.area__container__selected__box}>
//                 <select
//                     onClick={(e) => {
//                         e.target.style.border = '0.13vw solid #da1e37';
//                         e.target.style.backgroundColor = 'white';
//                     }}
//                     style={
//                         areaValue !== 'area'
//                             ? { border: '0.13vw solid #da1e37' }
//                             : { border: 'area', backgroundColor: '#F5F5F5' }
//                     }
//                     name="area"
//                     onChange={(e) => {
//                         areaAction(e.target.value);
//                     }}
//                     value={areaValue}>
//                     <option value="area">Area</option>
//                     {khulnaAmadeeAreaList.map((area, index) => {
//                         return (
//                             <option value={area} key={index}>
//                                 {area}
//                             </option>
//                         );
//                     })}
//                 </select>
//             </div>
//         </div>
//     );
// }
// function KhulnaBatiaghatArea() {
//     let khulnaBatiaghatAreaList = ['batiaghat sadar', 'surkalee'];
//     return (
//         <div className={StyleSheet.area__container}>
//             <div className={StyleSheet.area__container__title}>Area:</div>
//             <div className={StyleSheet.area__container__selected__box}>
//                 <select
//                     onClick={(e) => {
//                         e.target.style.border = '0.13vw solid #da1e37';
//                         e.target.style.backgroundColor = 'white';
//                     }}
//                     style={
//                         areaValue !== 'area'
//                             ? { border: '0.13vw solid #da1e37' }
//                             : { border: 'area', backgroundColor: '#F5F5F5' }
//                     }
//                     name="area"
//                     onChange={(e) => {
//                         areaAction(e.target.value);
//                     }}
//                     value={areaValue}>
//                     <option value="area">Area</option>
//                     {khulnaBatiaghatAreaList.map((area, index) => {
//                         return (
//                             <option value={area} key={index}>
//                                 {area}
//                             </option>
//                         );
//                     })}
//                 </select>
//             </div>
//         </div>
//     );
// }
// function KhulnaChalnaBazarArea() {
//     let khulnaChalnaBazarAreaList = ['Bajua', 'Chalna Bazar Sadar', 'Dakup', 'Nalian'];
//     return (
//         <div className={StyleSheet.area__container}>
//             <div className={StyleSheet.area__container__title}>Area:</div>
//             <div className={StyleSheet.area__container__selected__box}>
//                 <select
//                     onClick={(e) => {
//                         e.target.style.border = '0.13vw solid #da1e37';
//                         e.target.style.backgroundColor = 'white';
//                     }}
//                     style={
//                         areaValue !== 'area'
//                             ? { border: '0.13vw solid #da1e37' }
//                             : { border: 'area', backgroundColor: '#F5F5F5' }
//                     }
//                     name="area"
//                     onChange={(e) => {
//                         areaAction(e.target.value);
//                     }}
//                     value={areaValue}>
//                     <option value="area">Area</option>
//                     {khulnaChalnaBazarAreaList.map((area, index) => {
//                         return (
//                             <option value={area} key={index}>
//                                 {area}
//                             </option>
//                         );
//                     })}
//                 </select>
//             </div>
//         </div>
//     );
// }
// function KhulnaDigaliaArea() {
//     let khulnaDigaliaAreaList = [
//         'Chandni Mahal',
//         'Digalia Sadar',
//         'Gazirhat',
//         'Ghoshghati',
//         'Senhati'
//     ];
//     return (
//         <div className={StyleSheet.area__container}>
//             <div className={StyleSheet.area__container__title}>Area:</div>
//             <div className={StyleSheet.area__container__selected__box}>
//                 <select
//                     onClick={(e) => {
//                         e.target.style.border = '0.13vw solid #da1e37';
//                         e.target.style.backgroundColor = 'white';
//                     }}
//                     style={
//                         areaValue !== 'area'
//                             ? { border: '0.13vw solid #da1e37' }
//                             : { border: 'area', backgroundColor: '#F5F5F5' }
//                     }
//                     name="area"
//                     onChange={(e) => {
//                         areaAction(e.target.value);
//                     }}
//                     value={areaValue}>
//                     <option value="area">Area</option>
//                     {khulnaDigaliaAreaList.map((area, index) => {
//                         return (
//                             <option value={area} key={index}>
//                                 {area}
//                             </option>
//                         );
//                     })}
//                 </select>
//             </div>
//         </div>
//     );
// }
// function KhulnaPaikgachhaArea() {
//     let khulnaPaikgachhaAreaList = ['kapilmoni', 'paikgachha sadar'];
//     return (
//         <div className={StyleSheet.area__container}>
//             <div className={StyleSheet.area__container__title}>Area:</div>
//             <div className={StyleSheet.area__container__selected__box}>
//                 <select
//                     onClick={(e) => {
//                         e.target.style.border = '0.13vw solid #da1e37';
//                         e.target.style.backgroundColor = 'white';
//                     }}
//                     style={
//                         areaValue !== 'area'
//                             ? { border: '0.13vw solid #da1e37' }
//                             : { border: 'area', backgroundColor: '#F5F5F5' }
//                     }
//                     name="area"
//                     onChange={(e) => {
//                         areaAction(e.target.value);
//                     }}
//                     value={areaValue}>
//                     <option value="area">Area</option>
//                     {khulnaPaikgachhaAreaList.map((area, index) => {
//                         return (
//                             <option value={area} key={index}>
//                                 {area}
//                             </option>
//                         );
//                     })}
//                 </select>
//             </div>
//         </div>
//     );
// }
// function KhulnaSajiaraArea() {
//     let khulnaSajiaraAreaList = ['chuknagar'];
//     return (
//         <div className={StyleSheet.area__container}>
//             <div className={StyleSheet.area__container__title}>Area:</div>
//             <div className={StyleSheet.area__container__selected__box}>
//                 <select
//                     onClick={(e) => {
//                         e.target.style.border = '0.13vw solid #da1e37';
//                         e.target.style.backgroundColor = 'white';
//                     }}
//                     style={
//                         areaValue !== 'area'
//                             ? { border: '0.13vw solid #da1e37' }
//                             : { border: 'area', backgroundColor: '#F5F5F5' }
//                     }
//                     name="area"
//                     onChange={(e) => {
//                         areaAction(e.target.value);
//                     }}
//                     value={areaValue}>
//                     <option value="area">Area</option>
//                     {khulnaSajiaraAreaList.map((area, index) => {
//                         return (
//                             <option value={area} key={index}>
//                                 {area}
//                             </option>
//                         );
//                     })}
//                 </select>
//             </div>
//         </div>
//     );
// }
// function KhulnaTerakhadaArea() {
//     let khulnaTerakhadaAreaList = ['barasat', 'terakhada sadar'];
//     return (
//         <div className={StyleSheet.area__container}>
//             <div className={StyleSheet.area__container__title}>Area:</div>
//             <div className={StyleSheet.area__container__selected__box}>
//                 <select
//                     onClick={(e) => {
//                         e.target.style.border = '0.13vw solid #da1e37';
//                         e.target.style.backgroundColor = 'white';
//                     }}
//                     style={
//                         areaValue !== 'area'
//                             ? { border: '0.13vw solid #da1e37' }
//                             : { border: 'area', backgroundColor: '#F5F5F5' }
//                     }
//                     name="area"
//                     onChange={(e) => {
//                         areaAction(e.target.value);
//                     }}
//                     value={areaValue}>
//                     <option value="area">Area</option>
//                     {khulnaTerakhadaAreaList.map((area, index) => {
//                         return (
//                             <option value={area} key={index}>
//                                 {area}
//                             </option>
//                         );
//                     })}
//                 </select>
//             </div>
//         </div>
//     );
// }
// function KhulnaTownArea() {
//     let khulnaTownAreaList = [
//         'Atra Shilpa Area',
//         'BIT Khulna',
//         'Doulatpur',
//         'Jahanabad Cantonment',
//         'Khulna G.P.O',
//         'Khulna Sadar',
//         'Khulna Shipyard',
//         'Khulna University',
//         'Siramani',
//         'Sonali Jute Mills'
//     ];
//     return (
//         <div className={StyleSheet.area__container}>
//             <div className={StyleSheet.area__container__title}>Area:</div>
//             <div className={StyleSheet.area__container__selected__box}>
//                 <select
//                     onClick={(e) => {
//                         e.target.style.border = '0.13vw solid #da1e37';
//                         e.target.style.backgroundColor = 'white';
//                     }}
//                     style={
//                         areaValue !== 'area'
//                             ? { border: '0.13vw solid #da1e37' }
//                             : { border: 'area', backgroundColor: '#F5F5F5' }
//                     }
//                     name="area"
//                     onChange={(e) => {
//                         areaAction(e.target.value);
//                     }}
//                     value={areaValue}>
//                     <option value="area">Area</option>
//                     {khulnaTownAreaList.map((area, index) => {
//                         return (
//                             <option value={area} key={index}>
//                                 {area}
//                             </option>
//                         );
//                     })}
//                 </select>
//             </div>
//         </div>
//     );
// }
// function KushtiaArea() {
//     let kushtiaAreaList = [
//         'Bheramara Bazar',
//         'Boro Bazer',
//         'BRB Bscic Area',
//         'Chorhas',
//         'Housing',
//         'Islamic University - Kushtia',
//         'Khas mathurapur',
//         'Khoksa',
//         'Kumarkhali',
//         'Kumarkhali Bazar',
//         'Kushtia Mohini',
//         'Kushtia Sadar',
//         'Lahini Bot Toil',
//         'Mirpur',
//         'Mojompur',
//         'Mongolbari Bazar',
//         'Poradaho Bazer',
//         'Singer Mor',
//         'Taragunia',
//         'Tri-Mohoni Bazar'
//     ];
//     return (
//         <div className={StyleSheet.area__container}>
//             <div className={StyleSheet.area__container__title}>Area:</div>
//             <div className={StyleSheet.area__container__selected__box}>
//                 <select
//                     onClick={(e) => {
//                         e.target.style.border = '0.13vw solid #da1e37';
//                         e.target.style.backgroundColor = 'white';
//                     }}
//                     style={
//                         areaValue !== 'area'
//                             ? { border: '0.13vw solid #da1e37' }
//                             : { border: 'area', backgroundColor: '#F5F5F5' }
//                     }
//                     name="area"
//                     onChange={(e) => {
//                         areaAction(e.target.value);
//                     }}
//                     value={areaValue}>
//                     <option value="area">Area</option>
//                     {kushtiaAreaList.map((area, index) => {
//                         return (
//                             <option value={area} key={index}>
//                                 {area}
//                             </option>
//                         );
//                     })}
//                 </select>
//             </div>
//         </div>
//     );
// }
// function MaguraArea() {
//     let maguraAreaList = ['Magura Sadar', 'Mohammadpur', 'Sripur'];
//     return (
//         <div className={StyleSheet.area__container}>
//             <div className={StyleSheet.area__container__title}>Area:</div>
//             <div className={StyleSheet.area__container__selected__box}>
//                 <select
//                     onClick={(e) => {
//                         e.target.style.border = '0.13vw solid #da1e37';
//                         e.target.style.backgroundColor = 'white';
//                     }}
//                     style={
//                         areaValue !== 'area'
//                             ? { border: '0.13vw solid #da1e37' }
//                             : { border: 'area', backgroundColor: '#F5F5F5' }
//                     }
//                     name="area"
//                     onChange={(e) => {
//                         areaAction(e.target.value);
//                     }}
//                     value={areaValue}>
//                     <option value="area">Area</option>
//                     {maguraAreaList.map((area, index) => {
//                         return (
//                             <option value={area} key={index}>
//                                 {area}
//                             </option>
//                         );
//                     })}
//                 </select>
//             </div>
//         </div>
//     );
// }
// function MeherpurArea() {
//     let meherpurAreaList = [
//         'Amjhupi Bazar',
//         'Bajitpur Border',
//         'Bamun Para',
//         'Baribaka',
//         'Boro Bazar',
//         'Bosepara',
//         'Buripota Border',
//         'Chadbil Mor',
//         'Gangni',
//         'Khan Para',
//         'Kolar Mor',
//         'Kulbaria Bazar',
//         'Meherpur Bandar',
//         'Meherpur Bus Stand Para',
//         'Meherpur College Mor',
//         'Meherpur Ghosh Para',
//         'Meherpur Hospital Gate',
//         'Meherpur Hotel Bazar',
//         'Meherpur Jailkhana Para',
//         'Meherpur Mollick Para',
//         'Meherpur Post Office',
//         'Meherpur Sadar',
//         'Meherpur Stadium Para',
//         'Meherpur Wapda Mor',
//         'mijib nagar complex',
//         'ujolpur'
//     ];
//     return (
//         <div className={StyleSheet.area__container}>
//             <div className={StyleSheet.area__container__title}>Area:</div>
//             <div className={StyleSheet.area__container__selected__box}>
//                 <select
//                     onClick={(e) => {
//                         e.target.style.border = '0.13vw solid #da1e37';
//                         e.target.style.backgroundColor = 'white';
//                     }}
//                     style={
//                         areaValue !== 'area'
//                             ? { border: '0.13vw solid #da1e37' }
//                             : { border: 'area', backgroundColor: '#F5F5F5' }
//                     }
//                     name="area"
//                     onChange={(e) => {
//                         areaAction(e.target.value);
//                     }}
//                     value={areaValue}>
//                     <option value="area">Area</option>
//                     {meherpurAreaList.map((area, index) => {
//                         return (
//                             <option value={area} key={index}>
//                                 {area}
//                             </option>
//                         );
//                     })}
//                 </select>
//             </div>
//         </div>
//     );
// }
// function NarailArea() {
//     let narailAreaList = [
//         'Adompur',
//         'Aladatpur',
//         'Badha Ghat Mor',
//         'Baradia',
//         'Bhawakhali',
//         'Bolorampur',
//         'Chamroli',
//         'Circuit House Area',
//         'Dokkhin Narail',
//         'Doljitpur',
//         'Dumurtola',
//         'Ghorakhali Bazar',
//         'Gochar',
//         'Hobokhali',
//         'Itna',
//         'Kalia',
//         'Laxmipasha',
//         'Lohagora',
//         'Loskorpur',
//         'Maizpara',
//         'Mohiskhola',
//         'Mulia',
//         'Naldi',
//         'Narail Chowrasta',
//         'Narail City College Mor',
//         'Narail DC Office Mor',
//         'Narail Durgapur',
//         'Narail Gabtola',
//         'Narail Puraton Bridge',
//         'Narail Rupganj Bazar',
//         'Narail Sadar',
//         'Narail Terminal',
//         'Nirali',
//         'Nishinath Tola',
//         'Rotodanga',
//         'Sheikh Rasel Bridge Mor',
//         'Sitarampur',
//         'Sm Sultan Mor',
//         'Sorospur',
//         'Subdhi Danga',
//         'Tularampur',
//         'Vaduli Danga',
//         'Vatiya',
//         'Vorasula'
//     ];
//     return (
//         <div className={StyleSheet.area__container}>
//             <div className={StyleSheet.area__container__title}>Area:</div>
//             <div className={StyleSheet.area__container__selected__box}>
//                 <select
//                     onClick={(e) => {
//                         e.target.style.border = '0.13vw solid #da1e37';
//                         e.target.style.backgroundColor = 'white';
//                     }}
//                     style={
//                         areaValue !== 'area'
//                             ? { border: '0.13vw solid #da1e37' }
//                             : { border: 'area', backgroundColor: '#F5F5F5' }
//                     }
//                     name="area"
//                     onChange={(e) => {
//                         areaAction(e.target.value);
//                     }}
//                     value={areaValue}>
//                     <option value="area">Area</option>
//                     {narailAreaList.map((area, index) => {
//                         return (
//                             <option value={area} key={index}>
//                                 {area}
//                             </option>
//                         );
//                     })}
//                 </select>
//             </div>
//         </div>
//     );
// }
// function SatkhiraArea() {
//     let satkhiraAreaList = [
//         'Ashashuni',
//         'Budhhat',
//         'Buri Goalini',
//         'Chandanpur',
//         'Debbhata',
//         'Gabura',
//         'Jhaudanga',
//         'Kalaroa',
//         'Kaliganj UPO',
//         'Nalta Mubaroknagar',
//         'Noornagar',
//         'Patkelghata',
//         'Ratanpur',
//         'Satkhira Islamia Acc',
//         'Satkhira Sadar',
//         'Taala'
//     ];
//     return (
//         <div className={StyleSheet.area__container}>
//             <div className={StyleSheet.area__container__title}>Area:</div>
//             <div className={StyleSheet.area__container__selected__box}>
//                 <select
//                     onClick={(e) => {
//                         e.target.style.border = '0.13vw solid #da1e37';
//                         e.target.style.backgroundColor = 'white';
//                     }}
//                     style={
//                         areaValue !== 'area'
//                             ? { border: '0.13vw solid #da1e37' }
//                             : { border: 'area', backgroundColor: '#F5F5F5' }
//                     }
//                     name="area"
//                     onChange={(e) => {
//                         areaAction(e.target.value);
//                     }}
//                     value={areaValue}>
//                     <option value="area">Area</option>
//                     {satkhiraAreaList.map((area, index) => {
//                         return (
//                             <option value={area} key={index}>
//                                 {area}
//                             </option>
//                         );
//                     })}
//                 </select>
//             </div>
//         </div>
//     );
// }
// // khulna all area end

// // Mymensingh all area start
// function JamalpurDewangonjArea() {
//     let jamalpurDewangonjAreaList = ['dewangonj dewangonj S.Mills', 'dewangonj sadar'];
//     return (
//         <div className={StyleSheet.area__container}>
//             <div className={StyleSheet.area__container__title}>Area:</div>
//             <div className={StyleSheet.area__container__selected__box}>
//                 <select
//                     onClick={(e) => {
//                         e.target.style.border = '0.13vw solid #da1e37';
//                         e.target.style.backgroundColor = 'white';
//                     }}
//                     style={
//                         areaValue !== 'area'
//                             ? { border: '0.13vw solid #da1e37' }
//                             : { border: 'area', backgroundColor: '#F5F5F5' }
//                     }
//                     name="area"
//                     onChange={(e) => {
//                         areaAction(e.target.value);
//                     }}
//                     value={areaValue}>
//                     <option value="area">Area</option>
//                     {jamalpurDewangonjAreaList.map((area, index) => {
//                         return (
//                             <option value={area} key={index}>
//                                 {area}
//                             </option>
//                         );
//                     })}
//                 </select>
//             </div>
//         </div>
//     );
// }
// function JamalpurIslampurArea() {
//     let jamalpurIslampurAreaList = ['islampur durmoot', 'islampur gilabari', 'islampur sadar'];
//     return (
//         <div className={StyleSheet.area__container}>
//             <div className={StyleSheet.area__container__title}>Area:</div>
//             <div className={StyleSheet.area__container__selected__box}>
//                 <select
//                     onClick={(e) => {
//                         e.target.style.border = '0.13vw solid #da1e37';
//                         e.target.style.backgroundColor = 'white';
//                     }}
//                     style={
//                         areaValue !== 'area'
//                             ? { border: '0.13vw solid #da1e37' }
//                             : { border: 'area', backgroundColor: '#F5F5F5' }
//                     }
//                     name="area"
//                     onChange={(e) => {
//                         areaAction(e.target.value);
//                     }}
//                     value={areaValue}>
//                     <option value="area">Area</option>
//                     {jamalpurIslampurAreaList.map((area, index) => {
//                         return (
//                             <option value={area} key={index}>
//                                 {area}
//                             </option>
//                         );
//                     })}
//                 </select>
//             </div>
//         </div>
//     );
// }
// function JamalpurMadarganjArea() {
//     let jamalpurMadarganjAreaList = ['madarganj balijhuri', 'madarganj sadar'];
//     return (
//         <div className={StyleSheet.area__container}>
//             <div className={StyleSheet.area__container__title}>Area:</div>
//             <div className={StyleSheet.area__container__selected__box}>
//                 <select
//                     onClick={(e) => {
//                         e.target.style.border = '0.13vw solid #da1e37';
//                         e.target.style.backgroundColor = 'white';
//                     }}
//                     style={
//                         areaValue !== 'area'
//                             ? { border: '0.13vw solid #da1e37' }
//                             : { border: 'area', backgroundColor: '#F5F5F5' }
//                     }
//                     name="area"
//                     onChange={(e) => {
//                         areaAction(e.target.value);
//                     }}
//                     value={areaValue}>
//                     <option value="area">Area</option>
//                     {jamalpurMadarganjAreaList.map((area, index) => {
//                         return (
//                             <option value={area} key={index}>
//                                 {area}
//                             </option>
//                         );
//                     })}
//                 </select>
//             </div>
//         </div>
//     );
// }
// function JamalpurMalandhaArea() {
//     let jamalpurMalandhaAreaList = [
//         'Malandah Jamalpur',
//         'Malandah Mahmoodpur',
//         'Malandah Malancha',
//         'Malandah Sadar'
//     ];
//     return (
//         <div className={StyleSheet.area__container}>
//             <div className={StyleSheet.area__container__title}>Area:</div>
//             <div className={StyleSheet.area__container__selected__box}>
//                 <select
//                     onClick={(e) => {
//                         e.target.style.border = '0.13vw solid #da1e37';
//                         e.target.style.backgroundColor = 'white';
//                     }}
//                     style={
//                         areaValue !== 'area'
//                             ? { border: '0.13vw solid #da1e37' }
//                             : { border: 'area', backgroundColor: '#F5F5F5' }
//                     }
//                     name="area"
//                     onChange={(e) => {
//                         areaAction(e.target.value);
//                     }}
//                     value={areaValue}>
//                     <option value="area">Area</option>
//                     {jamalpurMalandhaAreaList.map((area, index) => {
//                         return (
//                             <option value={area} key={index}>
//                                 {area}
//                             </option>
//                         );
//                     })}
//                 </select>
//             </div>
//         </div>
//     );
// }
// function JamalpurShorishbariArea() {
//     let jamalpurShorishbariAreaList = [
//         'Madarganj Adarvita',
//         'Shorishabari Bausee',
//         'Shorishabari Jagannath Ghat',
//         'Shorishabari Jamuna Sar Karkhana',
//         'Shorishabari Pingna',
//         'Shorishabari Shorishabari'
//     ];
//     return (
//         <div className={StyleSheet.area__container}>
//             <div className={StyleSheet.area__container__title}>Area:</div>
//             <div className={StyleSheet.area__container__selected__box}>
//                 <select
//                     onClick={(e) => {
//                         e.target.style.border = '0.13vw solid #da1e37';
//                         e.target.style.backgroundColor = 'white';
//                     }}
//                     style={
//                         areaValue !== 'area'
//                             ? { border: '0.13vw solid #da1e37' }
//                             : { border: 'area', backgroundColor: '#F5F5F5' }
//                     }
//                     name="area"
//                     onChange={(e) => {
//                         areaAction(e.target.value);
//                     }}
//                     value={areaValue}>
//                     <option value="area">Area</option>
//                     {jamalpurShorishbariAreaList.map((area, index) => {
//                         return (
//                             <option value={area} key={index}>
//                                 {area}
//                             </option>
//                         );
//                     })}
//                 </select>
//             </div>
//         </div>
//     );
// }
// function JamalpurTownArea() {
//     let jamalpurTownAreaList = [
//         'Beltia',
//         'Bhabki',
//         'Charpolisha',
//         'Jamalpur Bus Terminal',
//         'Jamalpur Court',
//         'Jamalpur Nandina',
//         'Jamalpur Narundi',
//         'Jamalpur Railway Station',
//         'Jamalpur Sadar',
//         'Jamalpur Shantinagar',
//         'Khoshmahal',
//         'shekhervita',
//         'shihata'
//     ];
//     return (
//         <div className={StyleSheet.area__container}>
//             <div className={StyleSheet.area__container__title}>Area:</div>
//             <div className={StyleSheet.area__container__selected__box}>
//                 <select
//                     onClick={(e) => {
//                         e.target.style.border = '0.13vw solid #da1e37';
//                         e.target.style.backgroundColor = 'white';
//                     }}
//                     style={
//                         areaValue !== 'area'
//                             ? { border: '0.13vw solid #da1e37' }
//                             : { border: 'area', backgroundColor: '#F5F5F5' }
//                     }
//                     name="area"
//                     onChange={(e) => {
//                         areaAction(e.target.value);
//                     }}
//                     value={areaValue}>
//                     <option value="area">Area</option>
//                     {jamalpurTownAreaList.map((area, index) => {
//                         return (
//                             <option value={area} key={index}>
//                                 {area}
//                             </option>
//                         );
//                     })}
//                 </select>
//             </div>
//         </div>
//     );
// }
// function MymensinghGaforgaonArea() {
//     let mymensinghGaforgaonAreaList = [
//         'Gaforgaon Duttarbazar',
//         'Gaforgaon Kandipara',
//         'Gaforgaon Sadar',
//         'Gaforgaon Shibganj',
//         'Gaforgaon Usti'
//     ];
//     return (
//         <div className={StyleSheet.area__container}>
//             <div className={StyleSheet.area__container__title}>Area:</div>
//             <div className={StyleSheet.area__container__selected__box}>
//                 <select
//                     onClick={(e) => {
//                         e.target.style.border = '0.13vw solid #da1e37';
//                         e.target.style.backgroundColor = 'white';
//                     }}
//                     style={
//                         areaValue !== 'area'
//                             ? { border: '0.13vw solid #da1e37' }
//                             : { border: 'area', backgroundColor: '#F5F5F5' }
//                     }
//                     name="area"
//                     onChange={(e) => {
//                         areaAction(e.target.value);
//                     }}
//                     value={areaValue}>
//                     <option value="area">Area</option>
//                     {mymensinghGaforgaonAreaList.map((area, index) => {
//                         return (
//                             <option value={area} key={index}>
//                                 {area}
//                             </option>
//                         );
//                     })}
//                 </select>
//             </div>
//         </div>
//     );
// }
// function MymensinghGouripurArea() {
//     let mymensinghGouripurAreaList = ['gouripur ramgopalpur', 'gouripur sadar'];
//     return (
//         <div className={StyleSheet.area__container}>
//             <div className={StyleSheet.area__container__title}>Area:</div>
//             <div className={StyleSheet.area__container__selected__box}>
//                 <select
//                     onClick={(e) => {
//                         e.target.style.border = '0.13vw solid #da1e37';
//                         e.target.style.backgroundColor = 'white';
//                     }}
//                     style={
//                         areaValue !== 'area'
//                             ? { border: '0.13vw solid #da1e37' }
//                             : { border: 'area', backgroundColor: '#F5F5F5' }
//                     }
//                     name="area"
//                     onChange={(e) => {
//                         areaAction(e.target.value);
//                     }}
//                     value={areaValue}>
//                     <option value="area">Area</option>
//                     {mymensinghGouripurAreaList.map((area, index) => {
//                         return (
//                             <option value={area} key={index}>
//                                 {area}
//                             </option>
//                         );
//                     })}
//                 </select>
//             </div>
//         </div>
//     );
// }
// function MymensinghHaluaghatArea() {
//     let mymensinghHaluaghatAreaList = [
//         'haluaghat dhara',
//         'haluaghat munshirhat',
//         'haluaghat sadar'
//     ];
//     return (
//         <div className={StyleSheet.area__container}>
//             <div className={StyleSheet.area__container__title}>Area:</div>
//             <div className={StyleSheet.area__container__selected__box}>
//                 <select
//                     onClick={(e) => {
//                         e.target.style.border = '0.13vw solid #da1e37';
//                         e.target.style.backgroundColor = 'white';
//                     }}
//                     style={
//                         areaValue !== 'area'
//                             ? { border: '0.13vw solid #da1e37' }
//                             : { border: 'area', backgroundColor: '#F5F5F5' }
//                     }
//                     name="area"
//                     onChange={(e) => {
//                         areaAction(e.target.value);
//                     }}
//                     value={areaValue}>
//                     <option value="area">Area</option>
//                     {mymensinghHaluaghatAreaList.map((area, index) => {
//                         return (
//                             <option value={area} key={index}>
//                                 {area}
//                             </option>
//                         );
//                     })}
//                 </select>
//             </div>
//         </div>
//     );
// }
// function MymensinghIsshwargonjArea() {
//     let mymensinghIsshwargonjAreaList = [
//         'isshwargonj atharabari',
//         'isshwargonj isshwargonj',
//         'isshwargonj sohagi'
//     ];
//     return (
//         <div className={StyleSheet.area__container}>
//             <div className={StyleSheet.area__container__title}>Area:</div>
//             <div className={StyleSheet.area__container__selected__box}>
//                 <select
//                     onClick={(e) => {
//                         e.target.style.border = '0.13vw solid #da1e37';
//                         e.target.style.backgroundColor = 'white';
//                     }}
//                     style={
//                         areaValue !== 'area'
//                             ? { border: '0.13vw solid #da1e37' }
//                             : { border: 'area', backgroundColor: '#F5F5F5' }
//                     }
//                     name="area"
//                     onChange={(e) => {
//                         areaAction(e.target.value);
//                     }}
//                     value={areaValue}>
//                     <option value="area">Area</option>
//                     {mymensinghIsshwargonjAreaList.map((area, index) => {
//                         return (
//                             <option value={area} key={index}>
//                                 {area}
//                             </option>
//                         );
//                     })}
//                 </select>
//             </div>
//         </div>
//     );
// }
// function MymensinghMuktagachaArea() {
//     let mymensinghMuktagachaAreaList = ['muktagacha sadar'];
//     return (
//         <div className={StyleSheet.area__container}>
//             <div className={StyleSheet.area__container__title}>Area:</div>
//             <div className={StyleSheet.area__container__selected__box}>
//                 <select
//                     onClick={(e) => {
//                         e.target.style.border = '0.13vw solid #da1e37';
//                         e.target.style.backgroundColor = 'white';
//                     }}
//                     style={
//                         areaValue !== 'area'
//                             ? { border: '0.13vw solid #da1e37' }
//                             : { border: 'area', backgroundColor: '#F5F5F5' }
//                     }
//                     name="area"
//                     onChange={(e) => {
//                         areaAction(e.target.value);
//                     }}
//                     value={areaValue}>
//                     <option value="area">Area</option>
//                     {mymensinghMuktagachaAreaList.map((area, index) => {
//                         return (
//                             <option value={area} key={index}>
//                                 {area}
//                             </option>
//                         );
//                     })}
//                 </select>
//             </div>
//         </div>
//     );
// }
// function MymensinghNandailArea() {
//     let mymensinghNandailAreaList = ['nandail gangail', 'nandail sadar'];
//     return (
//         <div className={StyleSheet.area__container}>
//             <div className={StyleSheet.area__container__title}>Area:</div>
//             <div className={StyleSheet.area__container__selected__box}>
//                 <select
//                     onClick={(e) => {
//                         e.target.style.border = '0.13vw solid #da1e37';
//                         e.target.style.backgroundColor = 'white';
//                     }}
//                     style={
//                         areaValue !== 'area'
//                             ? { border: '0.13vw solid #da1e37' }
//                             : { border: 'area', backgroundColor: '#F5F5F5' }
//                     }
//                     name="area"
//                     onChange={(e) => {
//                         areaAction(e.target.value);
//                     }}
//                     value={areaValue}>
//                     <option value="area">Area</option>
//                     {mymensinghNandailAreaList.map((area, index) => {
//                         return (
//                             <option value={area} key={index}>
//                                 {area}
//                             </option>
//                         );
//                     })}
//                 </select>
//             </div>
//         </div>
//     );
// }
// function MymensinghPhulpurArea() {
//     let mymensinghPhulpurAreaList = ['phulpur beltia', 'phulpur phulpur', 'phulpur tarakanda'];
//     return (
//         <div className={StyleSheet.area__container}>
//             <div className={StyleSheet.area__container__title}>Area:</div>
//             <div className={StyleSheet.area__container__selected__box}>
//                 <select
//                     onClick={(e) => {
//                         e.target.style.border = '0.13vw solid #da1e37';
//                         e.target.style.backgroundColor = 'white';
//                     }}
//                     style={
//                         areaValue !== 'area'
//                             ? { border: '0.13vw solid #da1e37' }
//                             : { border: 'area', backgroundColor: '#F5F5F5' }
//                     }
//                     name="area"
//                     onChange={(e) => {
//                         areaAction(e.target.value);
//                     }}
//                     value={areaValue}>
//                     <option value="area">Area</option>
//                     {mymensinghPhulpurAreaList.map((area, index) => {
//                         return (
//                             <option value={area} key={index}>
//                                 {area}
//                             </option>
//                         );
//                     })}
//                 </select>
//             </div>
//         </div>
//     );
// }
// function MymensinghTownArea() {
//     let mymensinghTownAreaList = [
//         'Bhaluka',
//         'C.K. Gosh Road',
//         'Chorpara Area',
//         'Fulbaria Asim',
//         'Maskanda Bypass',
//         'Mymensingh Sadar',
//         'Mymensingh Sadar Agriculture University',
//         'Mymensingh Sadar Biddyaganj',
//         'Mymensingh Sadar Kawatkhali',
//         'Mymensingh Sadar Shombhuganj',
//         'Mymensingh Zero Point',
//         'Rahamatpur Engineering College',
//         'Sankipara Jamtola Ses More',
//         'Tarakanda Bazar',
//         'Trishal Kabi Nazrul University'
//     ];
//     return (
//         <div className={StyleSheet.area__container}>
//             <div className={StyleSheet.area__container__title}>Area:</div>
//             <div className={StyleSheet.area__container__selected__box}>
//                 <select
//                     onClick={(e) => {
//                         e.target.style.border = '0.13vw solid #da1e37';
//                         e.target.style.backgroundColor = 'white';
//                     }}
//                     style={
//                         areaValue !== 'area'
//                             ? { border: '0.13vw solid #da1e37' }
//                             : { border: 'area', backgroundColor: '#F5F5F5' }
//                     }
//                     name="area"
//                     onChange={(e) => {
//                         areaAction(e.target.value);
//                     }}
//                     value={areaValue}>
//                     <option value="area">Area</option>
//                     {mymensinghTownAreaList.map((area, index) => {
//                         return (
//                             <option value={area} key={index}>
//                                 {area}
//                             </option>
//                         );
//                     })}
//                 </select>
//             </div>
//         </div>
//     );
// }
// function MymensinghTrishalArea() {
//     let mymensinghTrishalAreaList = [
//         'Trishal Ahmadbad',
//         'Trishal Dhala',
//         'Trishal Ram Amritaganj',
//         'Trishal Saddar'
//     ];
//     return (
//         <div className={StyleSheet.area__container}>
//             <div className={StyleSheet.area__container__title}>Area:</div>
//             <div className={StyleSheet.area__container__selected__box}>
//                 <select
//                     onClick={(e) => {
//                         e.target.style.border = '0.13vw solid #da1e37';
//                         e.target.style.backgroundColor = 'white';
//                     }}
//                     style={
//                         areaValue !== 'area'
//                             ? { border: '0.13vw solid #da1e37' }
//                             : { border: 'area', backgroundColor: '#F5F5F5' }
//                     }
//                     name="area"
//                     onChange={(e) => {
//                         areaAction(e.target.value);
//                     }}
//                     value={areaValue}>
//                     <option value="area">Area</option>
//                     {mymensinghTrishalAreaList.map((area, index) => {
//                         return (
//                             <option value={area} key={index}>
//                                 {area}
//                             </option>
//                         );
//                     })}
//                 </select>
//             </div>
//         </div>
//     );
// }
// function NetrakonaArea() {
//     let netrakonaAreaList = [
//         'Atpara',
//         'Barhatta',
//         'Dharmapasha',
//         'Dhobaura',
//         'Dhobaura Sakoai',
//         'Kalmakanda',
//         'Kendua',
//         'Khaliajuri Saddar',
//         'Khaliajuri Shaldigha',
//         'Madan Madan',
//         'Moddhynagar Moddoynagar',
//         'mohanganj',
//         'netrakona sadar baikherhati',
//         'purbadhola jaria jhanjhail',
//         'purbadhola saddar',
//         'purbadhola shamgonj',
//         'susung durgapur'
//     ];
//     return (
//         <div className={StyleSheet.area__container}>
//             <div className={StyleSheet.area__container__title}>Area:</div>
//             <div className={StyleSheet.area__container__selected__box}>
//                 <select
//                     onClick={(e) => {
//                         e.target.style.border = '0.13vw solid #da1e37';
//                         e.target.style.backgroundColor = 'white';
//                     }}
//                     style={
//                         areaValue !== 'area'
//                             ? { border: '0.13vw solid #da1e37' }
//                             : { border: 'area', backgroundColor: '#F5F5F5' }
//                     }
//                     name="area"
//                     onChange={(e) => {
//                         areaAction(e.target.value);
//                     }}
//                     value={areaValue}>
//                     <option value="area">Area</option>
//                     {netrakonaAreaList.map((area, index) => {
//                         return (
//                             <option value={area} key={index}>
//                                 {area}
//                             </option>
//                         );
//                     })}
//                 </select>
//             </div>
//         </div>
//     );
// }
// function SherpurArea() {
//     let sherpurAreaList = [
//         'Akheri Bazar',
//         'Astomi Tola',
//         'Bakshigonj Bakshigonj',
//         'Bazit Khila',
//         'Boira Puran Pur',
//         'Chakpathak',
//         'Chapatoli',
//         'Chowrasta More',
//         'Dhakolhati',
//         'Durga Narayan Pur',
//         'Garial Bari',
//         'Gouripur',
//         'Gowalpotti',
//         'Gridda Narayanpur',
//         'Jhinaigati',
//         'Khowarpar',
//         'Kushum Hati',
//         'Methor Potti',
//         'Moddho Sheri',
//         'Nabaron School',
//         'Nakla',
//         'Nakla Gonopaddi',
//         'Nalitabari',
//         'Nalitabari Hatibandha',
//         'Nayanibazar',
//         'Nazira Bag Bazar',
//         'Puraton Goru Hati',
//         'Rajbollobpur',
//         'Rangmahal',
//         'Rogunath Bazar',
//         'Shajbor Khila',
//         'Shekh Hati',
//         'Sheri Bridge',
//         'Sherpur Bagbari',
//         'Sherpur Bot Tola',
//         'Sherpur College Mor',
//         'Sherpur Jailkhana Mor',
//         'Sherpur Kalibari',
//         'Sherpur Kaliganj',
//         'Sherpur Kasba',
//         'Sherpur Mirganj',
//         'Sherpur New Market',
//         'Sherpur Nobinagar',
//         'Sherpur Nowhata',
//         'Sherpur Sadar Hospital',
//         'Sherpur Shadar',
//         'Sherpur Thana Mor',
//         'Sherpur Truck Station',
//         'Sherpur Wireless Mor',
//         'Shib Bari',
//         'Shingpara',
//         'Shitolpur',
//         'Shribardi Shribardi'
//     ];
//     return (
//         <div className={StyleSheet.area__container}>
//             <div className={StyleSheet.area__container__title}>Area:</div>
//             <div className={StyleSheet.area__container__selected__box}>
//                 <select
//                     onClick={(e) => {
//                         e.target.style.border = '0.13vw solid #da1e37';
//                         e.target.style.backgroundColor = 'white';
//                     }}
//                     style={
//                         areaValue !== 'area'
//                             ? { border: '0.13vw solid #da1e37' }
//                             : { border: 'area', backgroundColor: '#F5F5F5' }
//                     }
//                     name="area"
//                     onChange={(e) => {
//                         areaAction(e.target.value);
//                     }}
//                     value={areaValue}>
//                     <option value="area">Area</option>
//                     {sherpurAreaList.map((area, index) => {
//                         return (
//                             <option value={area} key={index}>
//                                 {area}
//                             </option>
//                         );
//                     })}
//                 </select>
//             </div>
//         </div>
//     );
// }
// // Mymensingh all area end

// // Rajshahi area start
// function BaguraArea() {
//     let baguraAreaList = [
//         'Adamdighi',
//         'Bogra Cantonment',
//         'Bogra Sadar',
//         'Belkuchi',
//         'Balukapara',
//         'Barachapra',
//         'Bottola Bazar',
//         'Chalapara',
//         'Champapur',
//         'Chandaikona',
//         'Chandan Baisha',
//         'Chhantiagram',
//         'Debkhanda',
//         'Dhunat',
//         'Dupchachia',
//         'Erulia',
//         'Gabtoli',
//         'Gokul',
//         'Gosaibari',
//         'Goshaibari',
//         'Kahaloo',
//         'Kahalu',
//         'Khanpur',
//         'Koiel',
//         'Koyel',
//         'Kundagram',
//         'Kutubpur',
//         'Lahiri Para',
//         'Namuja',
//         'Nandigram',
//         'Nasharatpur',
//         'Nasratpur',
//         'Noongola',
//         'Palli Unnyan Accademy',
//         'Santahar',
//         'Santahar Pouroshova',
//         'Sariakandi',
//         'Shabgram',
//         'Shalikha',
//         'Shekharkola',
//         'Sherpur',
//         'Sherpur Chakatola Road',
//         'Shibganj',
//         'Sonatola',
//         'Sukhanpukur',
//         'Talora',
//         'Ulipurpara',
//         'Utra'
//     ];
//     return (
//         <div className={StyleSheet.area__container}>
//             <div className={StyleSheet.area__container__title}>Area:</div>
//             <div className={StyleSheet.area__container__selected__box}>
//                 <select
//                     onClick={(e) => {
//                         e.target.style.border = '0.13vw solid #da1e37';
//                         e.target.style.backgroundColor = 'white';
//                     }}
//                     style={
//                         areaValue !== 'area'
//                             ? { border: '0.13vw solid #da1e37' }
//                             : { border: 'area', backgroundColor: '#F5F5F5' }
//                     }
//                     name="area"
//                     onChange={(e) => {
//                         areaAction(e.target.value);
//                     }}
//                     value={areaValue}>
//                     <option value="area">Area</option>
//                     {baguraAreaList.map((area, index) => {
//                         return (
//                             <option value={area} key={index}>
//                                 {area}
//                             </option>
//                         );
//                     })}
//                 </select>
//             </div>
//         </div>
//     );
// }
// function ChapaiNawabganjArea() {
//     let chapaiNawabganjAreaList = [
//         'Amnura',
//         'Bholahat',
//         'Chapai Nawabganj Sadar',
//         'Gomashtapur',
//         'Kansart',
//         'Manaksha',
//         'Mandumala',
//         'Nachol',
//         'Rajarampur',
//         'Ramchandrapur',
//         'Rohanpur',
//         'Shibganj U.P.O'
//     ];
//     return (
//         <div className={StyleSheet.area__container}>
//             <div className={StyleSheet.area__container__title}>Area:</div>
//             <div className={StyleSheet.area__container__selected__box}>
//                 <select
//                     onClick={(e) => {
//                         e.target.style.border = '0.13vw solid #da1e37';
//                         e.target.style.backgroundColor = 'white';
//                     }}
//                     style={
//                         areaValue !== 'area'
//                             ? { border: '0.13vw solid #da1e37' }
//                             : { border: 'area', backgroundColor: '#F5F5F5' }
//                     }
//                     name="area"
//                     onChange={(e) => {
//                         areaAction(e.target.value);
//                     }}
//                     value={areaValue}>
//                     <option value="area">Area</option>
//                     {chapaiNawabganjAreaList.map((area, index) => {
//                         return (
//                             <option value={area} key={index}>
//                                 {area}
//                             </option>
//                         );
//                     })}
//                 </select>
//             </div>
//         </div>
//     );
// }
// function JoypurhatArea() {
//     let joypurhatAreaList = [
//         'Akklepur',
//         'Jamalganj',
//         'Joypurhat Municipality Office',
//         'Joypurhat Sadar',
//         'Joypurhat Stadium',
//         'Kalai',
//         'Khetlal',
//         'Panchbibi',
//         'Tilakpur'
//     ];
//     return (
//         <div className={StyleSheet.area__container}>
//             <div className={StyleSheet.area__container__title}>Area:</div>
//             <div className={StyleSheet.area__container__selected__box}>
//                 <select
//                     onClick={(e) => {
//                         e.target.style.border = '0.13vw solid #da1e37';
//                         e.target.style.backgroundColor = 'white';
//                     }}
//                     style={
//                         areaValue !== 'area'
//                             ? { border: '0.13vw solid #da1e37' }
//                             : { border: 'area', backgroundColor: '#F5F5F5' }
//                     }
//                     name="area"
//                     onChange={(e) => {
//                         areaAction(e.target.value);
//                     }}
//                     value={areaValue}>
//                     <option value="area">Area</option>
//                     {joypurhatAreaList.map((area, index) => {
//                         return (
//                             <option value={area} key={index}>
//                                 {area}
//                             </option>
//                         );
//                     })}
//                 </select>
//             </div>
//         </div>
//     );
// }
// function NaogaonArea() {
//     let naogaonAreaList = [
//         'Ahsanganj',
//         'Badalgachhi',
//         'Balihar',
//         'Bandai',
//         'Dhamuirhat',
//         'Kashimpur',
//         'Mahadevpur',
//         'Manda',
//         'Moduhil',
//         'Naogaon Sadar',
//         'Niamatpur',
//         'Nitpur',
//         'Panguria',
//         'Patnitala',
//         'Porsa',
//         'Prasadpur',
//         'Raninagar',
//         'Sapahar'
//     ];
//     return (
//         <div className={StyleSheet.area__container}>
//             <div className={StyleSheet.area__container__title}>Area:</div>
//             <div className={StyleSheet.area__container__selected__box}>
//                 <select
//                     onClick={(e) => {
//                         e.target.style.border = '0.13vw solid #da1e37';
//                         e.target.style.backgroundColor = 'white';
//                     }}
//                     style={
//                         areaValue !== 'area'
//                             ? { border: '0.13vw solid #da1e37' }
//                             : { border: 'area', backgroundColor: '#F5F5F5' }
//                     }
//                     name="area"
//                     onChange={(e) => {
//                         areaAction(e.target.value);
//                     }}
//                     value={areaValue}>
//                     <option value="area">Area</option>
//                     {naogaonAreaList.map((area, index) => {
//                         return (
//                             <option value={area} key={index}>
//                                 {area}
//                             </option>
//                         );
//                     })}
//                 </select>
//             </div>
//         </div>
//     );
// }
// function NatoreArea() {
//     let natoreAreaList = [
//         'Abdulpur',
//         'Baiddyabal Gharia',
//         'Baraigram',
//         'Dayarampur',
//         'Digapatia',
//         'Gopalpur U.P.O',
//         'Harua',
//         'Hatgurudaspur',
//         'Lalpur S.O',
//         'Laxman',
//         'Madhnagar',
//         'Natore Sadar',
//         'singra'
//     ];
//     return (
//         <div className={StyleSheet.area__container}>
//             <div className={StyleSheet.area__container__title}>Area:</div>
//             <div className={StyleSheet.area__container__selected__box}>
//                 <select
//                     onClick={(e) => {
//                         e.target.style.border = '0.13vw solid #da1e37';
//                         e.target.style.backgroundColor = 'white';
//                     }}
//                     style={
//                         areaValue !== 'area'
//                             ? { border: '0.13vw solid #da1e37' }
//                             : { border: 'area', backgroundColor: '#F5F5F5' }
//                     }
//                     name="area"
//                     onChange={(e) => {
//                         areaAction(e.target.value);
//                     }}
//                     value={areaValue}>
//                     <option value="area">Area</option>
//                     {natoreAreaList.map((area, index) => {
//                         return (
//                             <option value={area} key={index}>
//                                 {area}
//                             </option>
//                         );
//                     })}
//                 </select>
//             </div>
//         </div>
//     );
// }
// function PabnaArea() {
//     let pabnaAreaList = [
//         'Banwarinagar',
//         'Bera',
//         'Bhangura',
//         'Chatmohar',
//         'Debottar',
//         'Dhapari',
//         'Hamayetpur',
//         'Ishwardi',
//         'Kaliko Cotton Mills',
//         'Kashinathpur',
//         'Nakalia',
//         'Pabna Sadar',
//         'Pakshi',
//         'Puran Bharenga',
//         'Rajapur Bus Station',
//         'Sagarkandi',
//         'Sathia',
//         'Sujanagar'
//     ];
//     return (
//         <div className={StyleSheet.area__container}>
//             <div className={StyleSheet.area__container__title}>Area:</div>
//             <div className={StyleSheet.area__container__selected__box}>
//                 <select
//                     onClick={(e) => {
//                         e.target.style.border = '0.13vw solid #da1e37';
//                         e.target.style.backgroundColor = 'white';
//                     }}
//                     style={
//                         areaValue !== 'area'
//                             ? { border: '0.13vw solid #da1e37' }
//                             : { border: 'area', backgroundColor: '#F5F5F5' }
//                     }
//                     name="area"
//                     onChange={(e) => {
//                         areaAction(e.target.value);
//                     }}
//                     value={areaValue}>
//                     <option value="area">Area</option>
//                     {pabnaAreaList.map((area, index) => {
//                         return (
//                             <option value={area} key={index}>
//                                 {area}
//                             </option>
//                         );
//                     })}
//                 </select>
//             </div>
//         </div>
//     );
// }
// function RajshahiArea() {
//     let rajshahiAreaList = [
//         'Arani',
//         'Bagha',
//         'Bhabaniganj',
//         'Bhatkandi',
//         'Binodpur Bazar',
//         'Charghat',
//         'Durgapur',
//         'Ghoramara',
//         'Godagari',
//         'Katakhali',
//         'Kazla',
//         'Khodmohanpur',
//         'Lalitganj',
//         'Nowhata',
//         'Premtoli',
//         'Putia',
//         'Rajshahi Cantonment',
//         'Rajshahi Court',
//         'Rajshahi Sadar',
//         'Rajshahi Sugar Mills',
//         'Rajshahi University',
//         'Sapura',
//         'Sardah',
//         'Shyampur',
//         'taherpur',
//         'tanor'
//     ];
//     return (
//         <div className={StyleSheet.area__container}>
//             <div className={StyleSheet.area__container__title}>Area:</div>
//             <div className={StyleSheet.area__container__selected__box}>
//                 <select
//                     onClick={(e) => {
//                         e.target.style.border = '0.13vw solid #da1e37';
//                         e.target.style.backgroundColor = 'white';
//                     }}
//                     style={
//                         areaValue !== 'area'
//                             ? { border: '0.13vw solid #da1e37' }
//                             : { border: 'area', backgroundColor: '#F5F5F5' }
//                     }
//                     name="area"
//                     onChange={(e) => {
//                         areaAction(e.target.value);
//                     }}
//                     value={areaValue}>
//                     <option value="area">Area</option>
//                     {rajshahiAreaList.map((area, index) => {
//                         return (
//                             <option value={area} key={index}>
//                                 {area}
//                             </option>
//                         );
//                     })}
//                 </select>
//             </div>
//         </div>
//     );
// }
// function SirajganjArea() {
//     let sirajganjAreaList = [
//         'Baiddya Jam Toil',
//         'Belkuchi',
//         'Dhangora',
//         'Enayetpur',
//         'Gandail',
//         'Jamirta',
//         'Kaijuri',
//         'Kazipur',
//         'Lahiri Mohanpur',
//         'Makimpur',
//         'Malonga',
//         'Porjana',
//         'Raipur',
//         'Rashidabad',
//         'Salap',
//         'Shahjadpur',
//         'Shuvgachha',
//         'Sirajganj Sadar',
//         'Sohagpur',
//         'Sthal',
//         'Tarash',
//         'Ullapara',
//         'Ullapara R.S'
//     ];
//     return (
//         <div className={StyleSheet.area__container}>
//             <div className={StyleSheet.area__container__title}>Area:</div>
//             <div className={StyleSheet.area__container__selected__box}>
//                 <select
//                     onClick={(e) => {
//                         e.target.style.border = '0.13vw solid #da1e37';
//                         e.target.style.backgroundColor = 'white';
//                     }}
//                     style={
//                         areaValue !== 'area'
//                             ? { border: '0.13vw solid #da1e37' }
//                             : { border: 'area', backgroundColor: '#F5F5F5' }
//                     }
//                     name="area"
//                     onChange={(e) => {
//                         areaAction(e.target.value);
//                     }}
//                     value={areaValue}>
//                     <option value="area">Area</option>
//                     {sirajganjAreaList.map((area, index) => {
//                         return (
//                             <option value={area} key={index}>
//                                 {area}
//                             </option>
//                         );
//                     })}
//                 </select>
//             </div>
//         </div>
//     );
// }
// // Rajshahi area end

// // Ranpur area start
// function DinajpurArea() {
//     let dinajpurAreaList = [
//         'Ambari Bazar',
//         'Ansar Club',
//         'Asrom Para',
//         'Bahadur Bazar',
//         'Barapukuria Koylakhoni',
//         'Basuniya Potti',
//         'Bekipul',
//         'Bgb Camp',
//         'Birampur',
//         'Birol',
//         'Birol Bazar',
//         'BKSP',
//         'Bochaganj',
//         'Borogurgola',
//         'Boromath',
//         'Botibabur Mor',
//         'Bottoli Bazar',
//         'Bottoli Mor',
//         'Brac Center',
//         'Brtc Road',
//         'Chak Banarasi',
//         'Charubabur More',
//         'Chawliya Potti',
//         'Chehelgazi School',
//         'Chirir Bandar',
//         'Chok Bazar',
//         'Choto Gurgola',
//         'Chourangi Mor',
//         'Churipotti Mor',
//         'Dabgach Mosque',
//         'Dailar Mor',
//         'Dc Office',
//         'Dinajpur Bus Terminal',
//         'Dinajpur Circuit House',
//         'Dinajpur Education Board',
//         'Dinajpur - Golapganj',
//         'Dinajpur Govt. College',
//         'Dinajpur Sadar',
//         'Dinajpur Technical Training Centre',
//         'Doshmile',
//         'Dotola Mosque Mor',
//         'Fakir Para',
//         'Foridpur Gorsthan',
//         'Fulbari',
//         'Fultola Bazar',
//         'Gabura Bridge',
//         'Gaocia Gaerege Mor',
//         'Garments Bazar',
//         'Gausul Azom Eye Hospital',
//         'Ghasipara',
//         'Ghoraghat',
//         'Golapbag',
//         'Goneshtola',
//         'Gopalgonj Bazar',
//         'Goshaipur',
//         'Gunjabari',
//         'Hili Hakimpur',
//         'Holy Land College',
//         'Holy Land Women Campus',
//         'Horisova Mor',
//         'Housing Mor',
//         'Indra Mor',
//         'Iqbal School Mor',
//         'Islami Hospital',
//         'Jail Road',
//         'Jamaipara Mor',
//         'Jamtoli Bazar',
//         'Janata Bank Mor',
//         'Jogen Babur Math',
//         'Jorabridge',
//         'Kalur Mor',
//         'Kana Hafez Mor',
//         'Kanchon Bridge Mor',
//         'KBM College',
//         'Khaharol',
//         'Khal Para',
//         'Khamar Kachai Road',
//         'Khan Auto Rice Mil',
//         'Khanpur Bodar',
//         'Khansama',
//         'Khetripara',
//         'Khokon Mowlovi Mor',
//         'Kholahati Cantorment',
//         'Kisan Bazar',
//         'Kobiraj Hat',
//         'Komolpur',
//         'Kosba',
//         'Kutubdanga Bazzar',
//         'Labur Mor',
//         'Lalbag Mor',
//         'Law College Mor',
//         'Maldahpotti',
//         'Mamun Mor',
//         'Masimpur',
//         'Matasagor',
//         'Medical College',
//         'Mission Road',
//         'Misson Get',
//         'Mohanpur',
//         'Mohonpur Rabar Dam',
//         'Monggolpur',
//         'Mount Averest College',
//         'Mudi Para',
//         'Munshipara',
//         'Nabil Counter',
//         'Nawabganj',
//         'New Town 1',
//         'New Town 2',
//         'New Town 3',
//         'New Town 4',
//         'New Town 5',
//         'Newtown 6',
//         'Newtown 7',
//         'Newtown 8',
//         'Nimtola',
//         'Notun Para',
//         'Noyanpur',
//         'Paglamor',
//         'Paharpur',
//         'Paker Hat',
//         'Palli Bidyut',
//         'Patua Para',
//         'Police Line Market',
//         'Polytechnical College',
//         'Professor Para',
//         'Promottori',
//         'PTI Mor',
//         'Rab -13 Camp',
//         'Rail Bazar',
//         'Rajbati',
//         'Ramdubi Hat',
//         'Ramnagar',
//         'Raniganj Bazar',
//         'Ranirbandar',
//         'Sadeshsori Mor',
//         'Sekhpura',
//         'Setabganj',
//         'Sikdar Hat',
//         'Six Way Mor',
//         'Sohid Minar Mor',
//         'Sostitola',
//         'Staf Quarter Mor',
//         'Staf Quarter Mor',
//         'Station Road',
//         'Tap Biddyut Kendro',
//         'Thana Mor',
//         'Tnt Mor',
//         'Upozila Get',
//         'Vusir Bandar',
//         'Watertank Mor',
//         'Women Govt.College',
//         'Zia Heart Foundation'
//     ];
//     return (
//         <div className={StyleSheet.area__container}>
//             <div className={StyleSheet.area__container__title}>Area:</div>
//             <div className={StyleSheet.area__container__selected__box}>
//                 <select
//                     onClick={(e) => {
//                         e.target.style.border = '0.13vw solid #da1e37';
//                         e.target.style.backgroundColor = 'white';
//                     }}
//                     style={
//                         areaValue !== 'area'
//                             ? { border: '0.13vw solid #da1e37' }
//                             : { border: 'area', backgroundColor: '#F5F5F5' }
//                     }
//                     name="area"
//                     onChange={(e) => {
//                         areaAction(e.target.value);
//                     }}
//                     value={areaValue}>
//                     <option value="area">Area</option>
//                     {dinajpurAreaList.map((area, index) => {
//                         return (
//                             <option value={area} key={index}>
//                                 {area}
//                             </option>
//                         );
//                     })}
//                 </select>
//             </div>
//         </div>
//     );
// }
// function GaibandhaArea() {
//     let gaibandhaAreaList = [
//         'Ambari',
//         'Badiakhali',
//         'Baghjana',
//         'Balashi Ghat',
//         'Baluyapara',
//         'Bara Gayaspur',
//         'Bisramgachi',
//         'Bonapara Bazar',
//         'Chandipur',
//         'Gaibandha Sadar',
//         'Gobindoganj',
//         'Indira Par',
//         'Jalinge',
//         'Jugibai',
//         'Kanipara',
//         'Konchi Para',
//         'Kumarpara',
//         'Kuptola',
//         'Masterpara',
//         'Modhdhopara',
//         'Mollapara',
//         'Mondolpara',
//         'Naldanga Union',
//         'Palashbari',
//         'Pholia',
//         'Polash Para',
//         'Sadullapur',
//         'Suigram',
//         'Sundarganj'
//     ];
//     return (
//         <div className={StyleSheet.area__container}>
//             <div className={StyleSheet.area__container__title}>Area:</div>
//             <div className={StyleSheet.area__container__selected__box}>
//                 <select
//                     onClick={(e) => {
//                         e.target.style.border = '0.13vw solid #da1e37';
//                         e.target.style.backgroundColor = 'white';
//                     }}
//                     style={
//                         areaValue !== 'area'
//                             ? { border: '0.13vw solid #da1e37' }
//                             : { border: 'area', backgroundColor: '#F5F5F5' }
//                     }
//                     name="area"
//                     onChange={(e) => {
//                         areaAction(e.target.value);
//                     }}
//                     value={areaValue}>
//                     <option value="area">Area</option>
//                     {gaibandhaAreaList.map((area, index) => {
//                         return (
//                             <option value={area} key={index}>
//                                 {area}
//                             </option>
//                         );
//                     })}
//                 </select>
//             </div>
//         </div>
//     );
// }
// function KurigramArea() {
//     let kurigramAreaList = [
//         'Bhurungamari',
//         'Chilmari',
//         'Kurigram Sadar',
//         'Nageshwari',
//         'Rangalirbash',
//         'Rowmari',
//         'Ulipur'
//     ];
//     return (
//         <div className={StyleSheet.area__container}>
//             <div className={StyleSheet.area__container__title}>Area:</div>
//             <div className={StyleSheet.area__container__selected__box}>
//                 <select
//                     onClick={(e) => {
//                         e.target.style.border = '0.13vw solid #da1e37';
//                         e.target.style.backgroundColor = 'white';
//                     }}
//                     style={
//                         areaValue !== 'area'
//                             ? { border: '0.13vw solid #da1e37' }
//                             : { border: 'area', backgroundColor: '#F5F5F5' }
//                     }
//                     name="area"
//                     onChange={(e) => {
//                         areaAction(e.target.value);
//                     }}
//                     value={areaValue}>
//                     <option value="area">Area</option>
//                     {kurigramAreaList.map((area, index) => {
//                         return (
//                             <option value={area} key={index}>
//                                 {area}
//                             </option>
//                         );
//                     })}
//                 </select>
//             </div>
//         </div>
//     );
// }
// function LalmonirhatArea() {
//     let lalmonirhatAreaList = [
//         'Balatari Jame Mashjid Lalmonirhat',
//         'Barabari',
//         'Circuit House Lalmonirhat',
//         'Lalmonirhat Sadar',
//         'Lalmonirhat Stadium Road'
//     ];
//     return (
//         <div className={StyleSheet.area__container}>
//             <div className={StyleSheet.area__container__title}>Area:</div>
//             <div className={StyleSheet.area__container__selected__box}>
//                 <select
//                     onClick={(e) => {
//                         e.target.style.border = '0.13vw solid #da1e37';
//                         e.target.style.backgroundColor = 'white';
//                     }}
//                     style={
//                         areaValue !== 'area'
//                             ? { border: '0.13vw solid #da1e37' }
//                             : { border: 'area', backgroundColor: '#F5F5F5' }
//                     }
//                     name="area"
//                     onChange={(e) => {
//                         areaAction(e.target.value);
//                     }}
//                     value={areaValue}>
//                     <option value="area">Area</option>
//                     {lalmonirhatAreaList.map((area, index) => {
//                         return (
//                             <option value={area} key={index}>
//                                 {area}
//                             </option>
//                         );
//                     })}
//                 </select>
//             </div>
//         </div>
//     );
// }
// function NilphamariArea() {
//     let nilphamariAreaList = [
//         "Badia'r Mor",
//         'Chowrangi Mor',
//         'Circuit House Mor',
//         'College Station',
//         'Harowa',
//         'Kalitola',
//         'Maniker Mor',
//         'Nilphamari - Gobindopur',
//         'Notkhana',
//         'Pouro Market',
//         'Railway Station'
//     ];
//     return (
//         <div className={StyleSheet.area__container}>
//             <div className={StyleSheet.area__container__title}>Area:</div>
//             <div className={StyleSheet.area__container__selected__box}>
//                 <select
//                     onClick={(e) => {
//                         e.target.style.border = '0.13vw solid #da1e37';
//                         e.target.style.backgroundColor = 'white';
//                     }}
//                     style={
//                         areaValue !== 'area'
//                             ? { border: '0.13vw solid #da1e37' }
//                             : { border: 'area', backgroundColor: '#F5F5F5' }
//                     }
//                     name="area"
//                     onChange={(e) => {
//                         areaAction(e.target.value);
//                     }}
//                     value={areaValue}>
//                     <option value="area">Area</option>
//                     {nilphamariAreaList.map((area, index) => {
//                         return (
//                             <option value={area} key={index}>
//                                 {area}
//                             </option>
//                         );
//                     })}
//                 </select>
//             </div>
//         </div>
//     );
// }
// function PanchagarhArea() {
//     let panchagarhAreaList = [
//         'Bp Government High School Hostel Panchagarh',
//         'Docropara',
//         'Nimnagar Mosque Panchagarh',
//         'Panchagarh Sadar'
//     ];
//     return (
//         <div className={StyleSheet.area__container}>
//             <div className={StyleSheet.area__container__title}>Area:</div>
//             <div className={StyleSheet.area__container__selected__box}>
//                 <select
//                     onClick={(e) => {
//                         e.target.style.border = '0.13vw solid #da1e37';
//                         e.target.style.backgroundColor = 'white';
//                     }}
//                     style={
//                         areaValue !== 'area'
//                             ? { border: '0.13vw solid #da1e37' }
//                             : { border: 'area', backgroundColor: '#F5F5F5' }
//                     }
//                     name="area"
//                     onChange={(e) => {
//                         areaAction(e.target.value);
//                     }}
//                     value={areaValue}>
//                     <option value="area">Area</option>
//                     {panchagarhAreaList.map((area, index) => {
//                         return (
//                             <option value={area} key={index}>
//                                 {area}
//                             </option>
//                         );
//                     })}
//                 </select>
//             </div>
//         </div>
//     );
// }
// function RangpurArea() {
//     let rangpurAreaList = [
//         'Adarsopara',
//         'Ansari Mor',
//         'Arshad Nagor',
//         'Asrotpur',
//         'Babukha',
//         'Badarganj',
//         'Badarganj Sahidminar',
//         'Bangladesh Bank Mor',
//         'Barabil Gangachara',
//         'Beacon Mor',
//         'Betpotti',
//         'Bhurungamari',
//         'Birganj',
//         'Boiragi Para',
//         'Bokultola',
//         'Borobari',
//         'Boubazar',
//         'Burirhat',
//         'C.M.B Quarter',
//         'C.O Bazar',
//         'Cadet College',
//         'Central Road',
//         'Charokbari',
//         'Chartola Mor',
//         'Chatra',
//         'Checkpost 3 Numbar',
//         'Chirirbandar',
//         'Chokbazar',
//         'Circuit House Lane',
//         'City Bazar',
//         'D.C Mor',
//         'Deodoba',
//         'Dhap Engineer Para',
//         'Dhaperhut Palichara',
//         'Dhap Haji Para',
//         'Dhap Masterpara',
//         'Dhap Sagor Para',
//         'Dhap Sardar Para',
//         'Dharsona',
//         'Dr. Wazed Miah Textile Engineering College',
//         'Gamostopara',
//         'Ghunjonmor',
//         'GI Roy Road',
//         'Gonespur',
//         'Grand Hotel Mor',
//         'Guptopara',
//         'Gurati Para',
//         'Habibnagar Akhalitari',
//         'Hanumantola',
//         'Haragach',
//         'Horidebpur',
//         'Indrarmore',
//         'Jaldhaka Nilphamari',
//         'Jalkor',
//         'Jummapara',
//         'Jummapara Pakarmatha',
//         'Kachari Bazar',
//         'Kaharole',
//         'Kakoli Lane',
//         'Kamalkachna',
//         'Kamarpara',
//         'Karuponno Alamnagor',
//         'Katki Para',
//         'Kaunia',
//         'Kellaband',
//         'Kerani Para',
//         'Khamar Mor',
//         'Khasbag',
//         'Kobaru',
//         'Kukrul Golakatamor',
//         'Lalkuti Lane',
//         'Lohaqusi Shukurer Hat',
//         'Madarganj',
//         'Mahigonj',
//         'Medical Pakarmatha',
//         'Medical Purbo Gate',
//         'Medical Quater',
//         'Milonpara',
//         'Mithapukur',
//         'Mohadevpur',
//         'Mondol Para',
//         'Mordern',
//         'Mulatol',
//         'Munsipara',
//         'Nazirrerhat',
//         'New Jummapara',
//         'New Shahebganj',
//         'Nil Kantho',
//         'Nisbedganj',
//         'Noyatola Saidpur',
//         'Nurpur',
//         'Paglapir',
//         'Pairaband',
//         'Palpara',
//         'Parkmor',
//         'Pasari Para',
//         'Payra Chattar',
//         'Pirgacha',
//         'Pirganj',
//         'Pirpur',
//         'Pouro Bazar',
//         'Poyradanga Nageswari',
//         'Press Club',
//         'Prime Medical',
//         'Radhaballav',
//         'Rail Station',
//         'Rajendrapur',
//         'Rangpur Cantontment',
//         'Rangpur Sadar',
//         'Raypur',
//         'Rcc Mor',
//         'Rfl Foundary',
//         'RK Road',
//         'Robertsongonj',
//         'Salbon Mistripara',
//         'Sardarpara',
//         'Satmatha',
//         'Senpara',
//         'Shampur',
//         'Shantibag',
//         'Shapla',
//         'Shayamoli Lane',
//         'Shimulbag',
//         'Shukurer Hat',
//         'Siyalurmor',
//         'Sultanmor',
//         'Super Market',
//         'Tajhat',
//         'Taraganj',
//         'Tati Para',
//         'Thikadarpara',
//         'Uttom Hajirhat',
//         'vogi lane'
//     ];
//     return (
//         <div className={StyleSheet.area__container}>
//             <div className={StyleSheet.area__container__title}>Area:</div>
//             <div className={StyleSheet.area__container__selected__box}>
//                 <select
//                     onClick={(e) => {
//                         e.target.style.border = '0.13vw solid #da1e37';
//                         e.target.style.backgroundColor = 'white';
//                     }}
//                     style={
//                         areaValue !== 'area'
//                             ? { border: '0.13vw solid #da1e37' }
//                             : { border: 'area', backgroundColor: '#F5F5F5' }
//                     }
//                     name="area"
//                     onChange={(e) => {
//                         areaAction(e.target.value);
//                     }}
//                     value={areaValue}>
//                     <option value="area">Area</option>
//                     {rangpurAreaList.map((area, index) => {
//                         return (
//                             <option value={area} key={index}>
//                                 {area}
//                             </option>
//                         );
//                     })}
//                 </select>
//             </div>
//         </div>
//     );
// }
// function SaidpurArea() {
//     let saidpurAreaList = [
//         'Cant Bazar',
//         'Golahat Railway Colony',
//         'Hati Kahana',
//         'Kundol',
//         'Nilphamari Sadar',
//         'Saidpur Airport',
//         'Saidpur Bus Terminal',
//         'Saidpur Pach Matha Mor',
//         'Saidpur Plaza',
//         'Saidpur Post Office',
//         'Saidpur Railway Station',
//         'Saidpur Super Market',
//         'wapda bazar'
//     ];
//     return (
//         <div className={StyleSheet.area__container}>
//             <div className={StyleSheet.area__container__title}>Area:</div>
//             <div className={StyleSheet.area__container__selected__box}>
//                 <select
//                     onClick={(e) => {
//                         e.target.style.border = '0.13vw solid #da1e37';
//                         e.target.style.backgroundColor = 'white';
//                     }}
//                     style={
//                         areaValue !== 'area'
//                             ? { border: '0.13vw solid #da1e37' }
//                             : { border: 'area', backgroundColor: '#F5F5F5' }
//                     }
//                     name="area"
//                     onChange={(e) => {
//                         areaAction(e.target.value);
//                     }}
//                     value={areaValue}>
//                     <option value="area">Area</option>
//                     {saidpurAreaList.map((area, index) => {
//                         return (
//                             <option value={area} key={index}>
//                                 {area}
//                             </option>
//                         );
//                     })}
//                 </select>
//             </div>
//         </div>
//     );
// }
// function Thakurgaonrea() {
//     let thakurgaonreaList = [
//         'Atwari',
//         'BADC Staff Quarter',
//         'Baliadangi',
//         'Border Guard Bangladesh',
//         'College Para',
//         'Goalpara',
//         'Gobindo Nogor Mondir Para',
//         'Goreya',
//         'Goshpara',
//         'Hazipara',
//         'Islambag',
//         'Jamidarpara',
//         'Khalpara',
//         'Nishchintapur',
//         'Ruhia',
//         'Sarakar Para',
//         'Thakurgaon - Haripur',
//         'Thakurgaon - Munshipara',
//         'Thakurgaon - Pirganj',
//         'Thakurgaon Sadar',
//         'Thakurgaon - Tatipara'
//     ];
//     return (
//         <div className={StyleSheet.area__container}>
//             <div className={StyleSheet.area__container__title}>Area:</div>
//             <div className={StyleSheet.area__container__selected__box}>
//                 <select
//                     onClick={(e) => {
//                         e.target.style.border = '0.13vw solid #da1e37';
//                         e.target.style.backgroundColor = 'white';
//                     }}
//                     style={
//                         areaValue !== 'area'
//                             ? { border: '0.13vw solid #da1e37' }
//                             : { border: 'area', backgroundColor: '#F5F5F5' }
//                     }
//                     name="area"
//                     onChange={(e) => {
//                         areaAction(e.target.value);
//                     }}
//                     value={areaValue}>
//                     <option value="area">Area</option>
//                     {thakurgaonreaList.map((area, index) => {
//                         return (
//                             <option value={area} key={index}>
//                                 {area}
//                             </option>
//                         );
//                     })}
//                 </select>
//             </div>
//         </div>
//     );
// }
// // Ranpur area end

// // Sylhet area start
// function Balaganj() {
//     let balaganjAreaList = [
//         'Balaganj Begumpur',
//         'Balaganj Brahman Shashon',
//         'Balaganj Gaharpur',
//         'Balaganj Goala Bazar',
//         'Balaganj Karua',
//         'Balaganj Kathal Khair',
//         'Balaganj Natun Bazar',
//         'Balaganj Omarpur',
//         'Balaganj Sadar',
//         'Balaganj Tajpur'
//     ];
//     return (
//         <div className={StyleSheet.area__container}>
//             <div className={StyleSheet.area__container__title}>Area:</div>
//             <div className={StyleSheet.area__container__selected__box}>
//                 <select
//                     onClick={(e) => {
//                         e.target.style.border = '0.13vw solid #da1e37';
//                         e.target.style.backgroundColor = 'white';
//                     }}
//                     style={
//                         areaValue !== 'area'
//                             ? { border: '0.13vw solid #da1e37' }
//                             : { border: 'area', backgroundColor: '#F5F5F5' }
//                     }
//                     name="area"
//                     onChange={(e) => {
//                         areaAction(e.target.value);
//                     }}
//                     value={areaValue}>
//                     <option value="area">Area</option>
//                     {balaganjAreaList.map((area, index) => {
//                         return (
//                             <option value={area} key={index}>
//                                 {area}
//                             </option>
//                         );
//                     })}
//                 </select>
//             </div>
//         </div>
//     );
// }
// function BianibazarArea() {
//     let bianibazarAreaList = [
//         'Beanibazar Beanibazar',
//         'Beanibazar Churkai',
//         'Beanibazar jaldup',
//         'Beanibazar Kurar bazar',
//         'Beanibazar Mathiura',
//         'Bianibazar Salia bazar'
//     ];
//     return (
//         <div className={StyleSheet.area__container}>
//             <div className={StyleSheet.area__container__title}>Area:</div>
//             <div className={StyleSheet.area__container__selected__box}>
//                 <select
//                     onClick={(e) => {
//                         e.target.style.border = '0.13vw solid #da1e37';
//                         e.target.style.backgroundColor = 'white';
//                     }}
//                     style={
//                         areaValue !== 'area'
//                             ? { border: '0.13vw solid #da1e37' }
//                             : { border: 'area', backgroundColor: '#F5F5F5' }
//                     }
//                     name="area"
//                     onChange={(e) => {
//                         areaAction(e.target.value);
//                     }}
//                     value={areaValue}>
//                     <option value="area">Area</option>
//                     {bianibazarAreaList.map((area, index) => {
//                         return (
//                             <option value={area} key={index}>
//                                 {area}
//                             </option>
//                         );
//                     })}
//                 </select>
//             </div>
//         </div>
//     );
// }
// function BishwanathArea() {
//     let bishwanathAreaList = [
//         'Bishwanath Bishwanath',
//         'Bishwanath Dashghar',
//         'Bishwanath Deokalas',
//         'Bishwanath Doulathpur',
//         'Bishwanath Singer kanch'
//     ];
//     return (
//         <div className={StyleSheet.area__container}>
//             <div className={StyleSheet.area__container__title}>Area:</div>
//             <div className={StyleSheet.area__container__selected__box}>
//                 <select
//                     onClick={(e) => {
//                         e.target.style.border = '0.13vw solid #da1e37';
//                         e.target.style.backgroundColor = 'white';
//                     }}
//                     style={
//                         areaValue !== 'area'
//                             ? { border: '0.13vw solid #da1e37' }
//                             : { border: 'area', backgroundColor: '#F5F5F5' }
//                     }
//                     name="area"
//                     onChange={(e) => {
//                         areaAction(e.target.value);
//                     }}
//                     value={areaValue}>
//                     <option value="area">Area</option>
//                     {bishwanathAreaList.map((area, index) => {
//                         return (
//                             <option value={area} key={index}>
//                                 {area}
//                             </option>
//                         );
//                     })}
//                 </select>
//             </div>
//         </div>
//     );
// }
// function FenchuganjArea() {
//     let fenchuganjAreaList = [
//         'Dowbangla',
//         'Fenchuganj Fenchuganj',
//         'Fenchuganj Fenchuganj SareKarkh'
//     ];
//     return (
//         <div className={StyleSheet.area__container}>
//             <div className={StyleSheet.area__container__title}>Area:</div>
//             <div className={StyleSheet.area__container__selected__box}>
//                 <select
//                     onClick={(e) => {
//                         e.target.style.border = '0.13vw solid #da1e37';
//                         e.target.style.backgroundColor = 'white';
//                     }}
//                     style={
//                         areaValue !== 'area'
//                             ? { border: '0.13vw solid #da1e37' }
//                             : { border: 'area', backgroundColor: '#F5F5F5' }
//                     }
//                     name="area"
//                     onChange={(e) => {
//                         areaAction(e.target.value);
//                     }}
//                     value={areaValue}>
//                     <option value="area">Area</option>
//                     {fenchuganjAreaList.map((area, index) => {
//                         return (
//                             <option value={area} key={index}>
//                                 {area}
//                             </option>
//                         );
//                     })}
//                 </select>
//             </div>
//         </div>
//     );
// }
// function GoainhatArea() {
//     let goainhatAreaList = ['Goainhat Chiknagul', 'Goainhat Goainhat', 'Goainhat Jaflong'];
//     return (
//         <div className={StyleSheet.area__container}>
//             <div className={StyleSheet.area__container__title}>Area:</div>
//             <div className={StyleSheet.area__container__selected__box}>
//                 <select
//                     onClick={(e) => {
//                         e.target.style.border = '0.13vw solid #da1e37';
//                         e.target.style.backgroundColor = 'white';
//                     }}
//                     style={
//                         areaValue !== 'area'
//                             ? { border: '0.13vw solid #da1e37' }
//                             : { border: 'area', backgroundColor: '#F5F5F5' }
//                     }
//                     name="area"
//                     onChange={(e) => {
//                         areaAction(e.target.value);
//                     }}
//                     value={areaValue}>
//                     <option value="area">Area</option>
//                     {goainhatAreaList.map((area, index) => {
//                         return (
//                             <option value={area} key={index}>
//                                 {area}
//                             </option>
//                         );
//                     })}
//                 </select>
//             </div>
//         </div>
//     );
// }
// function HabiganjArea() {
//     let habiganjAreaList = [
//         'Banigram',
//         'Bhadeshwar',
//         'Dhaka Dakkhin',
//         'Golapganj Sadar',
//         'Jalalpur',
//         'Jindabazar',
//         'Kotalpur',
//         'Ranaping Bazar',
//         'Shekhpur',
//         'West Barokut'
//     ];
//     return (
//         <div className={StyleSheet.area__container}>
//             <div className={StyleSheet.area__container__title}>Area:</div>
//             <div className={StyleSheet.area__container__selected__box}>
//                 <select
//                     onClick={(e) => {
//                         e.target.style.border = '0.13vw solid #da1e37';
//                         e.target.style.backgroundColor = 'white';
//                     }}
//                     style={
//                         areaValue !== 'area'
//                             ? { border: '0.13vw solid #da1e37' }
//                             : { border: 'area', backgroundColor: '#F5F5F5' }
//                     }
//                     name="area"
//                     onChange={(e) => {
//                         areaAction(e.target.value);
//                     }}
//                     value={areaValue}>
//                     <option value="area">Area</option>
//                     {habiganjAreaList.map((area, index) => {
//                         return (
//                             <option value={area} key={index}>
//                                 {area}
//                             </option>
//                         );
//                     })}
//                 </select>
//             </div>
//         </div>
//     );
// }
// function JakiganjArea() {
//     let jakiganjAreaList = [
//         'Azmireeganj',
//         'Bahubal',
//         'Baniachang',
//         'Baniachang Jatrapasha',
//         'Baniachang Kadirganj',
//         'Chunarughat',
//         'Chunarughat Chandpurbagan',
//         'Chunarughat Narapati',
//         'Habiganj Sadar',
//         'Habiganj Sadar Gopaya',
//         'Habiganj Sadar Shaestaganj',
//         'Madhabpur',
//         'Madhabpur Itakhola',
//         'Madhabpur Saihamnagar',
//         'Madhabpur Shahajibazar',
//         'Nabiganj',
//         'Nabiganj Digalbak',
//         'Nabiganj Golduba',
//         'Nabiganj Goplarbazar',
//         'Nabiganj Inathganj'
//     ];
//     return (
//         <div className={StyleSheet.area__container}>
//             <div className={StyleSheet.area__container__title}>Area:</div>
//             <div className={StyleSheet.area__container__selected__box}>
//                 <select
//                     onClick={(e) => {
//                         e.target.style.border = '0.13vw solid #da1e37';
//                         e.target.style.backgroundColor = 'white';
//                     }}
//                     style={
//                         areaValue !== 'area'
//                             ? { border: '0.13vw solid #da1e37' }
//                             : { border: 'area', backgroundColor: '#F5F5F5' }
//                     }
//                     name="area"
//                     onChange={(e) => {
//                         areaAction(e.target.value);
//                     }}
//                     value={areaValue}>
//                     <option value="area">Area</option>
//                     {jakiganjAreaList.map((area, index) => {
//                         return (
//                             <option value={area} key={index}>
//                                 {area}
//                             </option>
//                         );
//                     })}
//                 </select>
//             </div>
//         </div>
//     );
// }
// function KanaighatArea() {
//     let kanaighatAreaList = ['Zakiganj Bazar', 'Zakiganj Ichhamati', 'Zakiganj Sadar'];
//     return (
//         <div className={StyleSheet.area__container}>
//             <div className={StyleSheet.area__container__title}>Area:</div>
//             <div className={StyleSheet.area__container__selected__box}>
//                 <select
//                     onClick={(e) => {
//                         e.target.style.border = '0.13vw solid #da1e37';
//                         e.target.style.backgroundColor = 'white';
//                     }}
//                     style={
//                         areaValue !== 'area'
//                             ? { border: '0.13vw solid #da1e37' }
//                             : { border: 'area', backgroundColor: '#F5F5F5' }
//                     }
//                     name="area"
//                     onChange={(e) => {
//                         areaAction(e.target.value);
//                     }}
//                     value={areaValue}>
//                     <option value="area">Area</option>
//                     {kanaighatAreaList.map((area, index) => {
//                         return (
//                             <option value={area} key={index}>
//                                 {area}
//                             </option>
//                         );
//                     })}
//                 </select>
//             </div>
//         </div>
//     );
// }
// function MoulvibazarArea() {
//     let moulvibazarAreaList = ['kanaighat chatulbazar  '];
//     return (
//         <div className={StyleSheet.area__container}>
//             <div className={StyleSheet.area__container__title}>Area:</div>
//             <div className={StyleSheet.area__container__selected__box}>
//                 <select
//                     onClick={(e) => {
//                         e.target.style.border = '0.13vw solid #da1e37';
//                         e.target.style.backgroundColor = 'white';
//                     }}
//                     style={
//                         areaValue !== 'area'
//                             ? { border: '0.13vw solid #da1e37' }
//                             : { border: 'area', backgroundColor: '#F5F5F5' }
//                     }
//                     name="area"
//                     onChange={(e) => {
//                         areaAction(e.target.value);
//                     }}
//                     value={areaValue}>
//                     <option value="area">Area</option>
//                     {moulvibazarAreaList.map((area, index) => {
//                         return (
//                             <option value={area} key={index}>
//                                 {area}
//                             </option>
//                         );
//                     })}
//                 </select>
//             </div>
//         </div>
//     );
// }
// function SunamganjArea() {
//     let sunamganjAreaList = [
//         'Akhailkura',
//         'Bahar Mordan',
//         'Banani',
//         'Baralekha Baralekha',
//         'Baralekha Dhakkhinbag',
//         'Baralekha Juri',
//         'Baralekha Purbashahabajpur',
//         'Baronti',
//         'Bhairabganj Bazar',
//         'Borhat',
//         'Borshijura',
//         'Boruna',
//         'Buddhimontopur',
//         'Damia',
//         'Dighirpar - Moulvibazar',
//         'Durlovpur',
//         'Ekatuna',
//         'Ghumra',
//         'Giasnagar',
//         'Gobindopur',
//         'Gujarai',
//         'Hilalpur',
//         'Jagatshi',
//         'Jogonnathpur',
//         'Jugidor',
//         'Kadamhata',
//         'Kalapur',
//         'Kalenga',
//         'Kamalganj',
//         'Kamalganj Keramatnaga',
//         'Kamalganj Munshibazar',
//         'Kamalganj Patrakhola',
//         'Kamalganj Shamsher Nagar',
//         'Kamalpur Bazar',
//         'Kazir Bazar',
//         'Konokpur',
//         'Kulaura Baramchal',
//         'Kulaura Kajaldhara',
//         'Kulaura Karimpur',
//         'Kulaura Kulaura',
//         'Kulaura Langla',
//         'Kulaura Prithimpasha',
//         'Kulaura Tillagaon',
//         'Maliksorai',
//         'Mamrokpur',
//         'Moulvibazar - Islampur',
//         'Moulvibazar Sadar',
//         'Moulvibazar Sadar Afrozganj',
//         'Moulvibazar Sadar Berirpar',
//         'Moulvibazar Sadar Bonobithi',
//         'Moulvibazar Sadar Chandinighat',
//         'Moulvibazar Sadar Chowmuhona',
//         'Moulvibazar Sadar Court Road',
//         'Moulvibazar Sadar Darga Moholla',
//         'Moulvibazar Sadar Dhaka Bus Stand',
//         'Moulvibazar Sadar Dhorkapon',
//         'Moulvibazar Sadar Kazirgaon',
//         'Moulvibazar Sadar Kolimabad',
//         'Moulvibazar Sadar Kusumbag',
//         'Moulvibazar Sadar M. Saifur Rahman Road',
//         'Moulvibazar Sadar Matarkapon',
//         'Moulvibazar Sadar Monumukh',
//         'Moulvibazar Sadar Mostafapur',
//         'Moulvibazar Sadar Muslim Quarter',
//         'Moulvibazar Sadar Old Hospital Road',
//         'Moulvibazar Sadar Shah Mostafa Road',
//         'Moulvibazar Sadar Shantibag',
//         'Moulvibazar Sadar Sunapur',
//         'Moulvibazar Sadar Syed Mujtoba Ali Road',
//         'Moulvibazar Sadar Wapda Gate',
//         'Mukambazar',
//         'Munshi Bazar',
//         'Nadampur',
//         'Noldaria',
//         'Police Line',
//         'Polytechnic Institute',
//         'Premnagar Tea Estate',
//         'Radar Unit',
//         'Raipur',
//         'Rajnagar',
//         'Roghunondonpur',
//         'Sabia',
//         'Sarkarbazar',
//         'Shah Bandar',
//         'Shamorkuna',
//         'Sherpur Bus Stand',
//         'Shompashi',
//         'Shomserganj',
//         'Shomsernagar',
//         'Shomsernagar Airport',
//         'Soiyarpur',
//         'Sreemangal',
//         'Sreemangal Kalighat',
//         'Sreemangal Khejurichhara',
//         'Sreemangal Narain Chora',
//         'Sreemangal Satgaon',
//         'Sunapur',
//         'Taltola Baramchal',
//         'Thana Bazar',
//         'Uluail',
//         'Uttor Mulaim'
//     ];
//     return (
//         <div className={StyleSheet.area__container}>
//             <div className={StyleSheet.area__container__title}>Area:</div>
//             <div className={StyleSheet.area__container__selected__box}>
//                 <select
//                     onClick={(e) => {
//                         e.target.style.border = '0.13vw solid #da1e37';
//                         e.target.style.backgroundColor = 'white';
//                     }}
//                     style={
//                         areaValue !== 'area'
//                             ? { border: '0.13vw solid #da1e37' }
//                             : { border: 'area', backgroundColor: '#F5F5F5' }
//                     }
//                     name="area"
//                     onChange={(e) => {
//                         areaAction(e.target.value);
//                     }}
//                     value={areaValue}>
//                     <option value="area">Area</option>
//                     {sunamganjAreaList.map((area, index) => {
//                         return (
//                             <option value={area} key={index}>
//                                 {area}
//                             </option>
//                         );
//                     })}
//                 </select>
//             </div>
//         </div>
//     );
// }
// function SylhetSadarArea() {
//     let sylhetSadarAreaAreaList = [
//         'Bishamsarpur',
//         'Chhatak',
//         'Chhatak Cement Facto',
//         'Chhatak Chourangi Bazar',
//         'Chhatak Gabindaganj',
//         'Chhatak Gabindaganj Natun Ba',
//         'Chhatak Islamabad',
//         'Chhatak jahidpur',
//         'Chhatak Khurma',
//         'Chhatak Moinpur',
//         'Chhatak Paper Mills',
//         'Dhirai Chandpur',
//         'Dhirai Chandpur Jagdal',
//         'Duara bazar',
//         'Ghungiar',
//         'Jagnnathpur Atuajan',
//         'Jagnnathpur Hasan Fatemapur',
//         'Jagnnathpur Jagnnathpur',
//         'Jagnnathpur Rasulganj',
//         'Jagnnathpur Shiramsi',
//         'Jagnnathpur Syedpur',
//         'Sachna',
//         'Sunamganj Civil Surgeon Office',
//         'Sunamganj Sadar Hospital',
//         'Sunamganj Sadar Pagla',
//         'Sunamganj Sadar Patharia',
//         'Sunamganj Sadar Sunamganj Sadar',
//         'Tahirpur'
//     ];
//     return (
//         <div className={StyleSheet.area__container}>
//             <div className={StyleSheet.area__container__title}>Area:</div>
//             <div className={StyleSheet.area__container__selected__box}>
//                 <select
//                     onClick={(e) => {
//                         e.target.style.border = '0.13vw solid #da1e37';
//                         e.target.style.backgroundColor = 'white';
//                     }}
//                     style={
//                         areaValue !== 'area'
//                             ? { border: '0.13vw solid #da1e37' }
//                             : { border: 'area', backgroundColor: '#F5F5F5' }
//                     }
//                     name="area"
//                     onChange={(e) => {
//                         areaAction(e.target.value);
//                     }}
//                     value={areaValue}>
//                     <option value="area">Area</option>
//                     {sylhetSadarAreaAreaList.map((area, index) => {
//                         return (
//                             <option value={area} key={index}>
//                                 {area}
//                             </option>
//                         );
//                     })}
//                 </select>
//             </div>
//         </div>
//     );
// }
// // Sylhte area end

// function BarishalCity() {
//     let barishalCityList = [
//         'City',
//         'barguna',
//         'agailjhara',
//         'babuganj',
//         'barajalia',
//         'gouranadi',
//         'mehendiganj',
//         'muladi',
//         'sahebganj',
//         'barishal-town',
//         'barishal-uzirpur',
//         'bhola',
//         'jhalokati',
//         'patuakhali',
//         'pirojpur'
//     ];
//     return (
//         <div className={StyleSheet.city__container}>
//             <div className={StyleSheet.city__container__title}>City:</div>
//             <div className={StyleSheet.city__container__selected__box}>
//                 <select
//                     style={
//                         cityValue !== 'city'
//                             ? { border: '0.13vw solid #da1e37' }
//                             : { border: 'none', backgroundColor: '#F5F5F5' }
//                     }
//                     onClick={(e) => {
//                         e.target.style.border = '0.13vw solid #da1e37';
//                         e.target.style.backgroundColor = 'white';
//                     }}
//                     name="barishalcity"
//                     id="barishalcity"
//                     onChange={(e) => {
//                         cityAction(e.target.value);
//                     }}
//                     value={cityValue}>
//                     {barishalCityList.map((city, index) => {
//                         return (
//                             <option key={index} value={city.toLowerCase()}>
//                                 {city}
//                             </option>
//                         );
//                     })}
//                 </select>
//             </div>
//         </div>
//     );
// }

// // all area component end
