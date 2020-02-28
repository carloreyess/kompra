<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Student;
use Illuminate\Support\Facades\Auth;
class StudentController extends Controller
{
    public function select_students(){
        $data = Student::where('branch_id', Auth::user()->branch_id)
        ->get();
        $students = [];
        foreach($data as $row){
            $students[] = array(
                'label'=>$row['name'],
                'value'=>$row['student_id']
            );
        }
        return response()->json($students);
    }
}
