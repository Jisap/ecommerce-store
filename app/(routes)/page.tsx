import getBillboard from "@/actions/get-billboard";
import Billboard from "@/components/billboard";
import Container from "@/components/ui/container"

export const revalidate = 0;

const HomePage = async() => {

  const billboard = await getBillboard("ffaadcae-2150-43ee-9b66-b9c9ff56bdaf")

  return (
    <div>
      <Container>
        <div className="space-y-10 pb-10">
          <Billboard data={billboard}/>
        </div>
      </Container>
    </div>
  )
}

export default HomePage