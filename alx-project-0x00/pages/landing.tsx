import Card from "@/components/Card"
import Button from "@/components/Button"
const Landing: React.FC =  () => {
    return (
      <div>
        <h1 className=" text-xl font-extralight">Landing Page</h1>
        <Card />
        <Button title="small" styles="border bg-gray-500 text-white px-2 py-1 text-sm rounded-sm" />
        <Button title="medium" styles="border bg-gray-500 text-white px-4 py-2 text-md rounded-md" />
        <Button title="large" styles="border bg-gray-500 text-white px-6 py-3 text-lg rounded-full" />
      </div>
    )
  }
  export default Landing