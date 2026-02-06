import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { Send, CheckCircle, Loader2 } from 'lucide-react';

interface FormData {
  firstName: string;
  lastName: string;
  phone: string;
  terms: boolean;
}

const ContactForm: React.FC = () => {
  const { register, handleSubmit, formState: { errors }, reset } = useForm<FormData>();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const onSubmit = async (data: FormData) => {
    setIsSubmitting(true);
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 2000));
    console.log(data);
    setIsSubmitting(false);
    setIsSuccess(true);
    reset();
    setTimeout(() => setIsSuccess(false), 5000);
  };

  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-4 md:px-8">
        <div className="max-w-2xl mx-auto bg-white rounded-3xl shadow-2xl overflow-hidden border border-gray-100">
          <div className="bg-brand-blue p-8 text-center">
            <h2 className="text-3xl font-bold text-white mb-2">Quick Response Form</h2>
            <p className="text-blue-200">Fill this out and we'll dispatch a tech immediately.</p>
          </div>
          
          <div className="p-8 md:p-12">
            {isSuccess ? (
              <div className="text-center py-12 space-y-4">
                <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                  <CheckCircle className="w-10 h-10 text-green-600" />
                </div>
                <h3 className="text-2xl font-bold text-gray-800">Request Received!</h3>
                <p className="text-gray-600">A technician has been notified and will contact you shortly.</p>
                <button onClick={() => setIsSuccess(false)} className="text-brand-orange font-semibold hover:underline">Submit another request</button>
              </div>
            ) : (
              <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-sm font-semibold text-gray-700">First Name <span className="text-red-500">*</span></label>
                    <input 
                      {...register("firstName", { required: "First name is required" })}
                      className={`w-full px-4 py-3 rounded-lg border ${errors.firstName ? 'border-red-500 focus:ring-red-200' : 'border-gray-200 focus:ring-brand-blue/20 focus:border-brand-blue'} focus:ring-4 outline-none transition-all`}
                      placeholder="John"
                    />
                    {errors.firstName && <span className="text-xs text-red-500">{errors.firstName.message}</span>}
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-semibold text-gray-700">Last Name <span className="text-red-500">*</span></label>
                    <input 
                      {...register("lastName", { required: "Last name is required" })}
                      className={`w-full px-4 py-3 rounded-lg border ${errors.lastName ? 'border-red-500 focus:ring-red-200' : 'border-gray-200 focus:ring-brand-blue/20 focus:border-brand-blue'} focus:ring-4 outline-none transition-all`}
                      placeholder="Doe"
                    />
                    {errors.lastName && <span className="text-xs text-red-500">{errors.lastName.message}</span>}
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-semibold text-gray-700">Phone Number <span className="text-red-500">*</span></label>
                  <input 
                    type="tel"
                    {...register("phone", { required: "Phone number is required", pattern: { value: /^[0-9-+() ]*$/, message: "Invalid phone format" } })}
                    className={`w-full px-4 py-3 rounded-lg border ${errors.phone ? 'border-red-500 focus:ring-red-200' : 'border-gray-200 focus:ring-brand-blue/20 focus:border-brand-blue'} focus:ring-4 outline-none transition-all`}
                    placeholder="(555) 555-5555"
                  />
                  {errors.phone && <span className="text-xs text-red-500">{errors.phone.message}</span>}
                </div>

                <div className="flex items-start gap-3 pt-2">
                  <input 
                    type="checkbox"
                    id="terms"
                    {...register("terms")}
                    className="mt-1 w-5 h-5 text-brand-orange border-gray-300 rounded focus:ring-brand-orange"
                  />
                  <label htmlFor="terms" className="text-xs text-gray-500 leading-tight">
                    I agree to <a href="#" className="text-brand-blue underline">terms & conditions</a> provided by St. George Semi-Truck Roadside Solutions. By providing my phone number, I agree to receive text messages from St. George Semi-Truck Roadside Solutions.
                  </label>
                </div>

                <button 
                  type="submit" 
                  disabled={isSubmitting}
                  className="w-full bg-brand-orange hover:bg-brand-orangeHover text-white font-bold py-4 rounded-xl shadow-lg shadow-brand-orange/30 transform hover:-translate-y-1 transition-all disabled:opacity-70 disabled:cursor-not-allowed flex justify-center items-center gap-2"
                >
                  {isSubmitting ? <Loader2 className="animate-spin" /> : <Send size={20} />}
                  {isSubmitting ? 'Submitting...' : 'Submit Quick Response Request'}
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;