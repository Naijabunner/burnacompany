'use client'
import Link from "next/link"
import {
  Edit2Icon,
  Trash2Icon,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog"
import DeleteBlog from "@/components/actions/deleteBlog"
import { useState } from "react"

export const CardOne = ({ data }) => {
    return (
      <section className='bg-red w-full md:min-w-[1000px]'>
        {/* <h2 className='my-3 text-2xl'>All Blogs</h2> */}
        <main className='grid md:grid-cols-2 lg:grid-cols-3 gap-5 md:mx-10 '>{
          data.map((ent,index)=>{
            const [isDel, setisDel] = useState(false)
           return (
              
                <Card
                  x-chunk='dashboard-01-chunk-5 '
                  className='overflow-hidden hover:scale-[0.97] flex flex-col justify-between transition-all ease-in-out duration-300 '
                >
                  <CardHeader>
                    <CardTitle className='text-xl line-clamp-1'>
                      {ent.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className='text-sm line-clamp-5 ' dangerouslySetInnerHTML={{ __html: ent.content }} />
                  </CardContent>
                  <CardFooter className='mt-2 pb-3 flex justify-between  '>
                    <div className=' text-gray-900 font-bold '>
                    {ent.category} <br /> {ent.author}
                    </div>
                    <div className='btns flex '>
                      <Link
                        href={`/fuziondot/admin/dashboard/EditBlog/${ent.id}`}
                        prefetch={true}
                      >
                        <Button
                          size='icon'
                          className=' h-7 w-7 mr-3 iconb p-1 bg-slate-50 text-black  border-2  border-blue-400 hover:text-white hover:bg-blue-400'
                        >
                          <Edit2Icon />
                        </Button>
                      </Link>
                      <DeleteBlog data={ent} setisDel={setisDel}/>
                      {/* <AlertDialog>
                      <AlertDialogTrigger
                        size='icon'
                        className='h-7 w-7 flex justify-center items-center rounded-sm iconb p-1 bg-slate-50 text-black  border-2  border-red-500 hover:text-white hover:bg-red-500'
                      >
                        <Trash2Icon />
                      </AlertDialogTrigger>
                      <AlertDialogContent>
                        <AlertDialogHeader>
                          <AlertDialogTitle>
                            Are you absolutely sure?
                          </AlertDialogTitle>
                          <AlertDialogDescription>
                            This action cannot be undone. This will permanently
                            delete this blog.
                          </AlertDialogDescription>
                        </AlertDialogHeader>
                        <AlertDialogFooter className={" flex items-center"}>
                          <AlertDialogCancel className='mt-0'>
                            Cancel
                          </AlertDialogCancel>
                          <AlertDialogAction className='bg-red-600 hover:bg-red-500'>
                            Continue
                          </AlertDialogAction>
                        </AlertDialogFooter>
                      </AlertDialogContent>
                    </AlertDialog> */}
                    </div>
                  </CardFooter>
                </Card>
            );
          })
        }  
        </main>
      </section>
    );
  };