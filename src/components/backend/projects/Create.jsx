import React, { useRef, useState, useMemo } from 'react';
import Header from '../../common/Header';
import Sidebar from '../../common/SideBar';
import Footer from '../../common/Footer';
import { Link, useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { apiUrl, fileUrl, token } from '../../common/http';
import { toast } from 'react-toastify';
import JoditEditor from 'jodit-react';

const Create = ({ placeholder }) => {
    const editor = useRef(null);
    const [content, setContent] = useState('');
    const [isdisable, setIsDisable] = useState(false);
    const [imageId, setImageId] = useState(null);


    const config = useMemo(() => ({
        readonly: false, // all options from https://xdsoft.net/jodit/docs/,
        placeholder: placeholder || 'Content...'
    }),
        [placeholder]
    );

    const {
        register,
        handleSubmit,
        watch,
        formState: { errors },
    } = useForm();

    const navitage = useNavigate();

    const onSubmit = async (data) => {
        const newData = { ...data, "content": content, "image": imageId }
        console.log(data);
        const res = await fetch(apiUrl + 'projects', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json',
                'Authorization': `Bearer ${token()}`,
            },
            body: JSON.stringify(newData)
        })

        const result = await res.json();

        if (result.status == true) {
            toast.success(result.message);
            navitage('/admin/projects');
        }
        else {
            toast.error(result.message);
        }
        console.log(result);
    };

    const handleFile = async (e) => {
        const formData = new FormData();
        const file = e.target.files[0];
        formData.append('image', file);

        setIsDisable(true);

        await fetch(apiUrl + 'temp-images', {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Authorization': `Bearer ${token()}`,
            },
            body: formData
        }).then(res => res.json())
            .then(result => {
                if (result.status == false) {
                    toast.error(result.errors.image[0]);
                }
                else {
                    setImageId(result.data.id);

                    console.log(imageId);
                }
            })

        setIsDisable(false);
    }

    return (
        <>
            <Header />
            <main>
                <div className='container my-5'>
                    <div className='row'>
                        <div className='col-md-3'>
                            {/* <Sidebar /> */}
                            <Sidebar />

                        </div>
                        <div className='col-md-9'>
                            {/* Dashboard */}
                            <div className='card shadow border-0'>
                                <div className='card-body p-4'>
                                    <div className='d-flex justify-content-between'>
                                        <h4 className='h5'>Projects/Create</h4>
                                        <Link className='btn-primary small' to="/admin/services">Back</Link>
                                    </div>
                                    <hr />
                                    <form onSubmit={handleSubmit(onSubmit)}>
                                        <div className='mb-3'>
                                            <label htmlFor='' className='form-label'>Name</label>
                                            <input
                                                {
                                                ...register("title", { required: "The Title Field is required" })
                                                }

                                                placeholder='Title'
                                                type="text" className={`form-control ${errors.title && 'is-invalid'}`} />
                                            {
                                                errors.title && <p className='invalid-feedback'>{errors.title.message}</p>
                                            }
                                        </div>

                                        <div className='mb-3'>
                                            <label htmlFor='' className='form-label'>Slug</label>
                                            <input {...register("slug", { required: "The Slug Field is required" })}
                                                placeholder='Slug'
                                                type="text" className={`form-control ${errors.slug && 'is-invalid'}`} />
                                            {
                                                errors.slug && <p className='invalid-feedback'>{errors.slug.message}</p>

                                            }
                                        </div>

                                        <div className='mb-3'>
                                            <div className='row'>
                                                <div className='col-md-6'>
                                                    <label htmlFor='' className='form-label'>Location</label>
                                                    <input type='text' className='form-control' {...register("location")} placeholder='Location' />
                                                </div>
                                                <div className='col-md-6'>
                                                    <label htmlFor='' className='form-label'>Construction Type</label>
                                                    <select className='form-control'
                                                        {
                                                        ...register("construction_type")
                                                        }
                                                    >
                                                        <option value="">-- Select --</option>
                                                        <option value="Residential Construction">Residential Construction</option>
                                                        <option value="Commercial Construction">Commercial Construction </option>
                                                        <option value="Industrial Construction">Industrial Construction</option>
                                                        <option value="Infrastructural Construction">Infrastructural Construction</option>

                                                    </select>
                                                </div>
                                            </div>
                                        </div>

                                        <div className='mb-3'>
                                            <div className='row'>
                                                <div className='col-md-6'>
                                                    <label htmlFor='' className='form-label'>Sector</label>
                                                    <select className='form-control'
                                                        {
                                                        ...register("sector")
                                                        }
                                                    >
                                                        <option value="">-- Select --</option>
                                                        <option value="Health">Health</option>
                                                        <option value="Education">Education</option>
                                                        <option value="Corporate">Corporate</option>

                                                    </select>
                                                </div>
                                                <div className='col-md-6'>
                                                    <label htmlFor='' className='form-label'>Status</label>
                                                    <select
                                                        {
                                                        ...register("status")
                                                        }
                                                        className='form-control'>
                                                        <option value="1">Active</option>
                                                        <option value="0">Block</option>
                                                    </select>
                                                </div>
                                            </div>
                                        </div>



                                        <div className='mb-3'>
                                            <label htmlFor='' className='form-label'>Description</label>
                                            <textarea

                                                placeholder='Description'
                                                {
                                                ...register("short_desc")
                                                }
                                                type="text" className='form-control' />
                                        </div>

                                        <div className='mb-3'>
                                            <label htmlFor='' className='form-label'>Content</label>
                                            <JoditEditor
                                                ref={editor}
                                                value={content}
                                                config={config}
                                                tabIndex={1} // tabIndex of textarea
                                                onBlur={newContent => setContent(newContent)} // preferred to use only this option to update the content for performance reasons
                                                onChange={newContent => { }}
                                            />
                                        </div>

                                        <div className='mb-3'>
                                            <label htmlFor='' className='form-label'>Status</label>
                                            <input onChange={handleFile} type="file" className="form-control" id="" />
                                        </div>
                                        <button disabled={isdisable} type='submit' className='btn-primary large'>Submit</button>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </main>

            <Footer />


        </>
    )
}

export default Create
