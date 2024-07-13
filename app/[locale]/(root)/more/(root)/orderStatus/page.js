'use client'

import OrderStatus from '@/components/shared/premium-plus/OrderStatus'

export default function OrderStatusPage() {
  return (
    <div className='bg-white p-5'>
      <OrderStatus showNextButtons={false} showOrderInfo={false} />
    </div>
  )
}
