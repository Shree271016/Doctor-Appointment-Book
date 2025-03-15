import Loader from '../../components/Loader/Loading';
import Error from '../../components/Error/Error';
import { BASE_URL } from '../../utils/config';
import { useFetchData } from "../../hooks/useFetchData";
import Tabs from './Tabs';
import { useState } from 'react';

const Dashboard = () => {
  const { data, loading, error } = useFetchData(`${BASE_URL}/doctors/profile/me`);
  const [tab, setTab] = useState("overview")


  return (
    <section>
      <div className='max-w-[1170px] px-5 mx-auto'>
        {loading && !error && <Loader />}
        {error && !loading && <Error message={error} />}

        {
          !loading && !error && data && (
            <div className='grid lg:grid-cols-3 gap-[30px] lg:gap-[50px]'>
              <Tabs tab={tab} setTab={setTab} />
         
              <div className="lg:col-span-2">
                <h1 className="text-2xl font-bold">Welcome, Dr. {data.name}</h1>
                <p>Email: {data.email}</p>
                {data.isApproved === "pending" && (
                  <div className="flex p-4 mb-4 text-yellow-800 bg-yellow-50 rounded-lg">
                    <div className="ml-3 text-sm font-medium">
                       To get approval please complete your profile. We&apos;ll review manually and approve within 3 days.
                    </div>
                  </div>
                )}
                <div>

                  {tab === "overview" && (<div>
                    <div className='flex items-center gap-4 mb-10'>
                      <figure className='max-w-[200px] max-h-[200px]'>
                        <img src={data?.photo} alt="" className='w-full' />
                      </figure>
                    </div>

                  </div>)}

                  {tab === "appointments" && <div>Appointments content goes here</div>}
                  {tab === "settings" && <div>Profile Settings content goes here</div>}
                </div>
              </div>
            </div>
          )
        }

      </div>
    </section>
  )
};

export default Dashboard