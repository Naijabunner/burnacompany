import Link from "next/link"
import {
  UploadCloudIcon,
  Users,
} from "lucide-react"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import Tiptap from "@/components/Tiptap"
export const EditCard = () => {
    return (
      <section>
        <Card
          x-chunk='dashboard-01-chunk-5 '
          className='  overflow-hidden transition-all ease-in-out duration-300 max-w-[1200px] 2xl:mx-auto mt-5'
        >
          <CardHeader>
            <CardTitle className=''>
              <label htmlFor='' className=' text-lg'>
                Title :
              </label>
              <br />
              <input
                type='text'
                value={"Blog Title"}
                className='bg-white border text-lg font-medium  border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-purple-500 p-1'
              />
            </CardTitle>
          </CardHeader>
  
          <CardContent>
            <label htmlFor='' className=' text-lg font-bold'>
              Content :
            </label>
            <br />
  
            <Tiptap />
          </CardContent>
          <CardContent>
            <label htmlFor='' className=' text-lg font-bold mb-2'>
              Category :
            </label>
            <br />
            <Select>
              <SelectTrigger className='w-[180px]'>
                <SelectValue placeholder='Category' />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value='light'>SEO</SelectItem>
                <SelectItem value='dark'>Marketing </SelectItem>
                <SelectItem value='system'>Research</SelectItem>
              </SelectContent>
            </Select>
  
            <div className='blog-details-tags-box  mt-3 '>
              <h4 className='self-start'>Tags</h4> <br />
             
              <div className='blog-details-tags-list flex-wrap gap-y-3'>
                <Link href='#'>SEO</Link>
                <Link href='#'>Marketing</Link>
                <Link href='#'>Research</Link>
                <Link href='#'>Research</Link>
                <Link href='#'>Research</Link>
              </div>
            </div>
          </CardContent>
          <CardFooter className='mt-2 flex justify-between '>
            <div className='btns'>
              <Button
                size='icon'
                className=' h-12 w-12 mr-3 iconb p-1 bg-slate-50 text-black  border-2  border-blue-400 hover:text-white hover:bg-blue-400'
              >
                <UploadCloudIcon className='' />
              </Button>
            </div>
          </CardFooter>
        </Card>
      </section>
    );
  };