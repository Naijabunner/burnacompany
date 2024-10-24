import React from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Label } from "@/components/ui/label";

const Category_readT = ({data, setdata}) => {
  return (
    <Card x-chunk='dashboard-07-chunk-3'>
      <CardHeader>
        <CardTitle>Blog category</CardTitle>
      </CardHeader>
      <CardContent>
        <div className='grid gap-6'>
          <div className='grid gap-3'>
            <Label htmlFor='status'>Category</Label>
            <Select  onValueChange={(value)=>setdata('e','category', value)} value={data.category} >
              <SelectTrigger id='status' aria-label='Select status'>
                <SelectValue placeholder='Select category'  />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value='DIGITAL'>Digital</SelectItem>
                <SelectItem value='SEO'>Seo</SelectItem>
                <SelectItem value='CONTENT_MGT'>Content_mgt</SelectItem>
                <SelectItem value='TIPS'>Tips</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default Category_readT;
