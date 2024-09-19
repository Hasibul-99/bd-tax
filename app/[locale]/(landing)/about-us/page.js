import '@/style/css/w3.css'
import '@/style/css/style.css'
import '@/style/css/other-style.css'

export default function AboutUs() {
  return (
    <>
      <div className='mt-6'>
        <div className='wrapped bg-[#F9FAFB] pt-20 pb-20'>
          <div className='section global_h1 container'>
            <h1 className='font-semibold mb-3'>About Us</h1>
            <p>
              Established in 2014, bdtax.com.bd is driven by a passion for
              revolutionizing the landscape of digital tax preparation and
              submission in Bangladesh. Our journey began with a singular focus
              on enhancing the user experience and ensuring unparalleled
              accuracy throughout every step of the process.
            </p>
          </div>
        </div>
        <div className='wrapped'>
          <div className='section pt-6 global_h1 container'>
            <h1 className='font-semibold mb-3'>Recognition and Achievements</h1>
            <p>
              Over the years, our dedication and innovation have garnered
              significant recognition within the industry. We are proud
              recipients of prestigious accolades including the Bangladesh
              Startup Award and the BASIS FinTech Award. Additionally, we had
              the honor of representing Bangladesh at APICTA China, further
              solidifying our commitment to excellence on a global scale.
            </p>
          </div>
          {/* Promo Section Awards */}
          <div className='container partners mt-12 mb-10'>
            <div className='bg-[#f9fafc] rounded-[12px]'>
              <div className='custom-container-under'>
                <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 md:grid-cols-4 gap-x-5 justify-center'>
                  <div className='p-5'>
                    {' '}
                    <img
                      src='/assets/images/Image (5).png'
                      alt='Premium Plus'
                      width='100%'
                      className='mt-1'
                    />
                  </div>
                  <div className='p-5'>
                    {' '}
                    <img
                      src='/assets/images/Image (6).png'
                      alt='Premium Plus'
                      width='100%'
                      className='mt-1'
                    />
                  </div>
                  <div className='p-5'>
                    {' '}
                    <img
                      src='/assets/images/Image (7).png'
                      alt='Premium Plus'
                      width='100%'
                      className='mt-1'
                    />
                  </div>
                  <div className='p-5'>
                    {' '}
                    <img
                      src='/assets/images/Image (8).png'
                      alt='Premium Plus'
                      width='100%'
                      className='mt-1'
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className='wrapped'>
          <div className='section global_h1 container'>
            <h1 className='font-semibold mb-3'>Our Mission</h1>
            <p>
              At bdtax.com.bd, our mission is clear: to provide comprehensive,
              system-driven tax planning, preparation and submission services
              that empower taxpayers to navigate the complexities of Bangladesh
              tax law with ease. We understand the importance of minimizing tax
              liabilities while ensuring compliance, and our solutions are
              meticulously designed to achieve just that.
            </p>
          </div>
        </div>
        <div className='hidden wrapped bg-[#F9FAFB] pt-20 pb-20 mt-6 mb-6'>
          <div className='section global_h1 container'>
            <h1 className='font-semibold mb-3'>Our Leadership Team</h1>
            <div className='section global_h1'>
              <p className='pb-6'>
                Behind every successful endeavor lies a dedicated team of
                individuals, and&nbsp;bdtax.com.bd&nbsp;is no exception. Our
                team comprises seasoned entrepreneurs, technologists, software
                engineers, tax lawyers, and consultants, each bringing a wealth
                of expertise and experience to the table. Together, we are
                united in our commitment to delivering cutting-edge solutions
                and unparalleled support to our valued clients.{' '}
              </p>
              <p>
                At&nbsp;bdtax.com.bd, we are not just a service provider; we are
                your trusted partner in navigating the ever-evolving landscape
                of taxation in Bangladesh. Join us on this journey towards a
                future where tax planning is simplified, transparent, and
                tailored to meet your individual needs.{' '}
              </p>
            </div>
            <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 gap-8 p-10 px-4  bg-[#F9FAFB] rounded-[12px]'>
              <div className='team w3-center'>
                <img
                  src='/assets/images/team/team_pic1.png'
                  alt='Jane'
                  style={{width: '100%'}}
                />
                <h2 className='p-4'>Jane Doe</h2>
                <p className='title'>CEO &amp; Founder</p>
                <p>Some text that describes me lorem ipsum ipsum lorem.</p>
                <p>example@example.com</p>
                <p>
                  <button className='button'>Contact</button>
                </p>
              </div>
              <div className='team w3-center'>
                <img
                  src='/assets/images/team/team_pic2.png'
                  alt='Mike'
                  style={{width: '100%'}}
                />
                <h2 className='p-4'>Mike Ross</h2>
                <p className='title'>Art Director</p>
                <p>Some text that describes me lorem ipsum ipsum lorem.</p>
                <p>example@example.com</p>
                <p>
                  <button className='button'>Contact</button>
                </p>
              </div>
              <div className='team w3-center'>
                <img
                  src='/assets/images/team/team_pic3.png'
                  alt='John'
                  style={{width: '100%'}}
                />
                <h2 className='p-4'>John Doe</h2>
                <p className='title'>Designer</p>
                <p>Some text that describes me lorem ipsum ipsum lorem.</p>
                <p>example@example.com</p>
                <p>
                  <button className='button'>Contact</button>
                </p>
              </div>
              <div className='team w3-center'>
                <img
                  src='/assets/images/team/team_pic4.png'
                  alt='John'
                  style={{width: '100%'}}
                />
                <h2 className='p-4'>John Doe</h2>
                <p className='title'>Designer</p>
                <p>Some text that describes me lorem ipsum ipsum lorem.</p>
                <p>example@example.com</p>
                <p>
                  <button className='button'>Contact</button>
                </p>
              </div>
              <div className='team w3-center'>
                <img
                  src='/assets/images/team/team_pic5.png'
                  alt='John'
                  style={{width: '100%'}}
                />
                <h2 className='p-4'>John Doe</h2>
                <p className='title'>Designer</p>
                <p>Some text that describes me lorem ipsum ipsum lorem.</p>
                <p>example@example.com</p>
                <p>
                  <button className='button'>Contact</button>
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className='wrapped pt-6 pb-6'>
          <div className='section global_h1 container'>
            <h1 className='font-semibold mb-3'>Copyright and Compliance</h1>
            <p>
              bdtax.com.bd is committed to upholding the highest standards of
              intellectual property rights. We are pleased to announce that we
              have been awarded Bangladesh Copyright Registration number
              14748-COPR, reaffirming our dedication to protecting our original
              work and ensuring compliance with all relevant regulations.
            </p>
          </div>
        </div>
      </div>
    </>
  )
}
