import {GET_DOWNLOAD_TAX_FILE, SAVE_CONSENT_DOC} from '@/scripts/api'
import {getData, postData} from '@/scripts/api-service'
import {Button, Checkbox, ConfigProvider, Typography} from 'antd'
import {useEffect, useState} from 'react'
const {Title} = Typography

export default function ShowDownloadTaxFile({setShow}) {
  const [fileData, setFileData] = useState()
  const [isConfirm, setIsConfirm] = useState()
  const [loading, setLoading] = useState(true)

  const getDownloadTaxFile = async () => {
    let res = await getData(GET_DOWNLOAD_TAX_FILE)

    if (res) {
      setFileData(res?.data)

      setTimeout(() => {
        setLoading(false)
      }, 1000)
    }
  }

  const handelSubmit = async () => {
    let res = await postData(SAVE_CONSENT_DOC)

    if (res) {
      setShow(2)
    }
  }

  useEffect(() => {
    getDownloadTaxFile()
  }, [])

  return (
    <div className='mt-12 p-10'>
      <Title level={4}>Please review your Tax return form</Title>

      {loading ? (
        <div className='text-center h-[400px] flex justify-items-center items-center relative'>
          <div>
            <img
              className='image'
              src='/assets/icons/loading.svg'
              alt='Premium Plus'
            />
          </div>
        </div>
      ) : (
        <>
          {fileData?.pdf_file_path ? (
            <>
              <object
                data={fileData?.pdf_file_path}
                type='application/pdf'
                width='100%'
                height='500vh'
              >
                <p>
                  <a href={fileData?.pdf_file_path}></a>
                </p>
              </object>
            </>
          ) : (
            ''
          )}
        </>
      )}

      <div className='text-center mt-8'>
        <ConfigProvider
          theme={{
            token: {
              colorPrimary: '#4B7F52',
            },
            components: {
              Button: {
                colorPrimary: '#4B7F52',
              },
            },
          }}
        >
          <Checkbox
            onChange={(e) => {
              setIsConfirm(e.target.checked)
            }}
          >
            <span className='font-medium'>
              I certify all docs provided by me is accurate.
            </span>
          </Checkbox>
          <Button
            type='primary'
            disabled={!isConfirm}
            className='prime-button !w-52 m-auto mt-4'
            onClick={() => {
              handelSubmit()
            }}
          >
            Approve & Sign
          </Button>
        </ConfigProvider>
      </div>
    </div>
  )
}
