<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\Bfxdetails;
class BFXController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    private $successStatus = 200;
    public function index()
    {
        try { 
            $success = Bfxdetails::get();
            return response()->json(['msg'=>'Common Image List','data'=>$success], $this->successStatus);
        }catch (\Exception $e){
            return response()->json(['msg'=>'Nill Data Found','data'=>array()], 422);
        }
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        try { 
            $Bfxdetails = new Bfxdetails;
            $Bfxdetails->name = request('name');
            $Bfxdetails->email = request('email');
            $Bfxdetails->phone = request('phone');
            $Bfxdetails->website = request('website');
            $Bfxdetails->contact_name = request('contact_name');
            $Bfxdetails->contact_phone = request('contact_phone');
            $Bfxdetails->contact_email = request('contact_email');
            $Bfxdetails->notes = request('notes');
            $Bfxdetails->type = request('type');
            $Bfxdetails->category = implode(',', request('category'));
            $Bfxdetails->commission_percentege = request('commission_percentege');
            $Bfxdetails->activate_from = request('activate_from');
            $Bfxdetails->critical_account = request('critical_account');
            $Bfxdetails->payment_option = implode(',',request('payment_option'));
            $Bfxdetails->save();
            return response()->json(['msg'=>'Stored Suceesfully'], $this->successStatus);
        }catch (\Exception $e){
            return response()->json(['msg'=>'Nill Data Found','data'=>array()], 422);
        }
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function edit($id)
    {
        try { 
            $Bfxdetails = Bfxdetails::findorfail($id);
            $Bfxdetails->category = explode(',',$Bfxdetails->category);
            $Bfxdetails->payment_option = explode(',',$Bfxdetails->payment_option);

            return response()->json(['msg'=>'Edit List','data'=>$Bfxdetails], $this->successStatus);
        }catch (Exception $e){
            return response()->json(['msg'=>'Nill Data Found','data'=>array()], 422);
        }
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id)
    {
        try { 
            $Bfxdetails = Bfxdetails::findorfail($id);
            $Bfxdetails->name = request('name');
            $Bfxdetails->email = request('email');
            $Bfxdetails->phone = request('phone');
            $Bfxdetails->website = request('website');
            $Bfxdetails->contact_name = request('contact_name');
            $Bfxdetails->contact_phone = request('contact_phone');
            $Bfxdetails->contact_email = request('contact_email');
            $Bfxdetails->notes = request('notes');
            $Bfxdetails->type = request('type');
            $Bfxdetails->category = implode(',', request('category'));
            $Bfxdetails->commission_percentege = request('commission_percentege');
            $Bfxdetails->activate_from = request('activate_from');
            $Bfxdetails->critical_account = request('critical_account');
            $Bfxdetails->payment_option = implode(',',request('payment_option'));
            $Bfxdetails->save();
            return response()->json(['msg'=>'Updated Successfully'], $this->successStatus);
        }catch (\Exception $e){
            return response()->json(['msg'=>'Nill Data Found','data'=>array()], 422);
        }
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        try {
            Bfxdetails::findorfail($id)->delete();
            return $output = ['status' => 'success','msg' => 'Bfxdetails Deleted Successfully'];
        }catch (\Exception $e){
            return ['sorry','Sorry,Something went wrong!'];
        }
    }
}
