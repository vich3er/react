
import {Outlet, useSearchParams} from "react-router-dom";

const PaginationComp = () => {
    const [query, setQuery] = useSearchParams({page: '1'});
const  btn = 'bg-lime-100'
    return (
        <div>
            <Outlet/>

            <div className='gap-3 flex'>
                <button className={btn} onClick={() => {
                    const page = query.get('page');
                    if (page) {
                        let currentPage = +page;
                        page > 1 ? setQuery({page: (--currentPage).toString()})
                            : setQuery({page: ('1').toString()})


                    }
                }}>
                    Назад
                </button>

                <button className={btn} onClick={() => {
                    let page = +query.get('page')
                    if (page)
                        setQuery({page: (++page).toString()})
                }}>
                    Вперед
                </button>
            </div>

        </div>
    );
};

export default PaginationComp;