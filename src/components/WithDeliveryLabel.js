const WithDeliveryLabel = (WrappedComponent) => {
    return (props) => {
        return (
            <div className='relative'>
                <p className="absolute top-0 right-0 bg-blue-500 p-1 z-10 inline-block text-[12px] text-white">30-mins Delivery</p>
                <WrappedComponent {...props} />
            </div>
        )
    }
}

export default WithDeliveryLabel;