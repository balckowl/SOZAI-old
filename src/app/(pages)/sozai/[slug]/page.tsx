const SozaiDetail = ({ params }: { params: { slug: string } }) => {

    const { slug } = params

    return (
        <div>{slug}</div>
    )
}

export default SozaiDetail