'use client'
import ContactUs from '@/components/common/ContactUs'

export default function Contact() {
  return (
    <div className='mt-6'>
      <ContactUs />
    </div>
    // {/*

    //       <div className='bg-[#F8FAFC] container mx-auto min-h-[80vh] mt-5 pb-16'>
    //       <div className='custom-container-under bg-white py-6 px-6 rounded-2xl'>
    //         <WelcomeMessage />
    //         <ConfigProvider
    //           theme={{
    //             token: {
    //               colorPrimary: '#126A25',
    //             },
    //             components: {
    //               Button: {
    //                 colorPrimary: '#126A25',
    //               },
    //             },
    //           }}
    //         >
    //           <Form
    //             className='mt-6'
    //             name='basic'
    //             form={form}
    //             onFinish={onFinish}
    //             autoComplete='off'
    //             size='large'
    //           >
    //             <Row gutter={16}>
    //               <Col className='gutter-row' xs={24} sm={24} md={4}>
    //                 Name *
    //               </Col>
    //               <Col className='gutter-row' xs={24} sm={24} md={20}>
    //                 <Form.Item
    //                   name='name'
    //                   rules={[
    //                     {
    //                       required: true,
    //                       message: 'Please input Name!',
    //                     },
    //                   ]}
    //                 >
    //                   <Input placeholder='Name *' />
    //                 </Form.Item>
    //               </Col>
    //             </Row>

    //             <Row gutter={16}>
    //               <Col className='gutter-row' xs={24} sm={24} md={4}>
    //                 Email Adderss *
    //               </Col>
    //               <Col className='gutter-row' xs={24} sm={24} md={20}>
    //                 <Form.Item
    //                   name='email'
    //                   rules={[
    //                     {
    //                       required: true,
    //                       message: 'Please input email!',
    //                     },
    //                     {
    //                       pattern:
    //                         /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i,
    //                       message: 'Please enter a valid email address',
    //                     },
    //                   ]}
    //                 >
    //                   <Input placeholder='Email Adderss *' />
    //                 </Form.Item>
    //               </Col>
    //             </Row>

    //             <Row gutter={16}>
    //               <Col className='gutter-row' xs={24} sm={24} md={4}>
    //                 Message *
    //               </Col>
    //               <Col className='gutter-row' xs={24} sm={24} md={20}>
    //                 <Form.Item
    //                   label=''
    //                   name='body'
    //                   rules={[
    //                     {
    //                       required: true,
    //                       message: 'Please input Message!',
    //                     },
    //                     {
    //                       max: 500,
    //                       message:
    //                         'The message cannot be longer than 500 characters!',
    //                     },
    //                   ]}
    //                 >
    //                   <TextArea rows={8} />
    //                 </Form.Item>
    //               </Col>
    //             </Row>

    //             <Form.Item className='text-right'>
    //               <Button
    //                 className='prime-button md:w-52 ml-auto px-10'
    //                 type='primary'
    //                 htmlType='submit'
    //               >
    //                 Save Changes
    //               </Button>
    //             </Form.Item>
    //           </Form>
    //         </ConfigProvider>
    //       </div>
    //     </div>

    //   */}
  )
}
