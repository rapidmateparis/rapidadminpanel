import React from "react";

// Sample package data
const packageData = [
  {
    name: "John Doe",
    email: "johndoe@email.com",
    role: "Pickup & Dropoff",
    status: "Pending",
    datetime: "26-03-24 10:30 AM",
  },
  {
    name: "John Doe",
    email: "johndoe@email.com",
    role: "Pickup & Dropoff",
    status: "Accepted",
    datetime: "26-03-24 10:30 AM",
  },
  {
    name: "John Doe",
    email: "johndoe@email.com",
    role: "Pickup & Dropoff",
    status: "Rejected",
    datetime: "26-03-24 10:30 AM",
  },
];

const JoinRequestTable = () => {

  return (
    <div className="rounded-sm border border-stroke bg-white px-5 pb-2.5 pt-6 shadow-default dark:border-strokedark dark:bg-boxdark sm:px-7.5 xl:pb-1">
      <div className="max-w-full overflow-x-auto">
        <table className="w-full table-auto">
          <thead>
            <tr className="bg-gray-2 text-left dark:bg-meta-4">
              <th className="min-w-[220px] px-4 py-4 font-medium text-black dark:text-white xl:pl-11">
                Name
              </th>
              <th className="min-w-[150px] px-4 py-4 font-medium text-black dark:text-white">
                Email
              </th>
              <th className="min-w-[120px] px-4 py-4 font-medium text-black dark:text-white">
                Role
              </th>
              <th className="px-4 py-4 font-medium text-black dark:text-white">
                Status
              </th>
              <th className="px-4 py-4 font-medium text-black dark:text-white">
                Date & Time
              </th>
              <th className="px-4 py-4 font-medium text-black dark:text-white">
                Action
              </th>
            </tr>
          </thead>
          <tbody>
            {packageData.map((packageItem, key) => (
              <tr key={key}>
                <td className="border-b border-[#eee] px-4 py-5 pl-9 dark:border-strokedark xl:pl-11">
                  <h5 className="font-medium text-black dark:text-white">
                    {packageItem.name}
                  </h5>
                </td>
                <td className="border-b border-[#eee] px-4 py-5 dark:border-strokedark">
                  <p className="text-black dark:text-white">
                    {packageItem.email}
                  </p>
                </td>
                <td className="border-b border-[#eee] px-4 py-5 dark:border-strokedark">
                  <p className="text-black dark:text-white">
                    {packageItem.role}
                  </p>
                </td>
                <td className="border-b border-[#eee] px-4 py-5 dark:border-strokedark">
                  <p
                    className={`inline-flex rounded-full bg-opacity-10 px-3 py-1 text-sm font-medium ${
                      packageItem.status === "Accepted"
                        ? "bg-success text-success"
                        : packageItem.status === "Rejected"
                        ? "bg-danger text-danger"
                        : "bg-warning text-warning"
                    }`}
                  >
                    {packageItem.status}
                  </p>
                </td>
                <td className="border-b border-[#eee] px-4 py-5 dark:border-strokedark">
                  <p className="text-black dark:text-white">
                    {packageItem.datetime}
                  </p>
                </td>
                <td className="border-b border-[#eee] px-4 py-5 dark:border-strokedark">
                  <div className="flex items-center space-x-3.5">
                    <button
                      className="hover:text-primary"
                    >
                      <svg
                        className="fill-current"
                        width="18"
                        height="18"
                        viewBox="0 0 18 18"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M8.99981 14.8219C3.43106 14.8219 0.674805 9.50624 0.562305 9.28124C0.47793 9.11249 0.47793 8.88749 0.562305 8.71874C0.674805 8.49374 3.43106 3.20624 8.99981 3.20624C14.5686 3.20624 17.3248 8.49374 17.4373 8.71874C17.5217 8.88749 17.5217 9.11249 17.4373 9.28124C17.3248 9.50624 14.5686 14.8219 8.99981 14.8219ZM1.85605 8.99999C2.4748 10.0406 4.89356 13.5562 8.99981 13.5562C13.1061 13.5562 15.5248 10.0406 16.1436 8.99999C15.5248 7.95936 13.1061 4.44374 8.99981 4.44374C4.89356 4.44374 2.4748 7.95936 1.85605 8.99999Z"
                          fill=""
                        />
                        <path
                          d="M9 11.3906C7.67812 11.3906 6.60938 10.3219 6.60938 9C6.60938 7.67813 7.67812 6.60938 9 6.60938C10.3219 6.60938 11.3906 7.67813 11.3906 9C11.3906 10.3219 10.3219 11.3906 9 11.3906ZM9 7.875C8.38125 7.875 7.875 8.38125 7.875 9C7.875 9.61875 8.38125 10.125 9 10.125C9.61875 10.125 10.125 9.61875 10.125 9C10.125 8.38125 9.61875 7.875 9 7.875Z"
                          fill=""
                        />
                      </svg>
                    </button>
                    <button className="hover:text-primary">
                      <svg
                        className="fill-current"
                        width="18"
                        height="18"
                        viewBox="0 0 18 18"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M13.7535 2.47502H11.5879V1.9969C11.5879 1.15315 10.9129 0.478149 10.0691 0.478149H7.90352C7.05977 0.478149 6.38477 1.15315 6.38477 1.9969V2.47502H4.21914C3.40352 2.47502 2.72852 3.15002 2.72852 3.96565V4.8094C2.72852 5.42815 3.09414 5.9344 3.62852 6.1594L4.07852 15.4688C4.13477 16.6219 5.09102 17.5219 6.24414 17.5219H11.7004C12.8535 17.5219 13.8098 16.6219 13.866 15.4688L14.3441 6.13127C14.8785 5.90627 15.2441 5.3719 15.2441 4.78127V3.93752C15.2441 3.15002 14.5691 2.47502 13.7535 2.47502ZM7.67852 1.9969C7.67852 1.85627 7.79102 1.74377 7.93164 1.74377H10.0973C10.2379 1.74377 10.3504 1.85627 10.3504 1.9969V2.47502H7.70664V1.9969H7.67852ZM4.02227 3.96565C4.02227 3.85315 4.10664 3.74065 4.24727 3.74065H13.7535C13.866 3.74065 13.9785 3.82502 13.9785 3.96565V4.8094C13.9785 4.9219 13.8941 5.0344 13.7535 5.0344H4.24727C4.13477 5.0344 4.02227 4.95002 4.02227 4.8094V3.96565ZM11.7285 16.2563H6.27227C5.79414 16.2563 5.40039 15.8906 5.37227 15.3844L4.95039 6.2719H13.0785L12.6566 15.3844C12.6004 15.9188 12.1785 16.2563 11.7285 16.2563Z"
                          fill=""
                        />
                        <path
                          d="M7.73133 13.889C7.84383 13.889 7.95633 13.8609 8.04633 13.7765L9.00258 12.8203L9.95883 13.7765C10.1038 13.9215 10.3513 13.9215 10.4963 13.7765C10.6413 13.6315 10.6413 13.384 10.4963 13.239L9.54008 12.2827L10.4963 11.3265C10.6413 11.1815 10.6413 10.934 10.4963 10.789C10.3513 10.644 10.1038 10.644 9.95883 10.789L9.00258 11.7453L8.04633 10.789C7.90133 10.644 7.65383 10.644 7.50883 10.789C7.36383 10.934 7.36383 11.1815 7.50883 11.3265L8.46508 12.2827L7.50883 13.239C7.36383 13.384 7.36383 13.6315 7.50883 13.7765C7.59883 13.8609 7.71133 13.889 7.73133 13.889Z"
                          fill=""
                        />
                      </svg>
                    </button>
                    <button className="hover:text-primary">
                      <svg
                        className="fill-current"
                        width="18"
                        height="18"
                        viewBox="0 0 18 18"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M13.5 3H12.75V2.25C12.75 1.00937 11.7406 0 10.5 0H7.5C6.25937 0 5.25 1.00937 5.25 2.25V3H4.5C3.67187 3 3 3.67187 3 4.5V16.5C3 17.3281 3.67187 18 4.5 18H13.5C14.3281 18 15 17.3281 15 16.5V4.5C15 3.67187 14.3281 3 13.5 3ZM6.75 2.25C6.75 1.55906 7.30906 1 8 1H10C10.6909 1 11.25 1.55906 11.25 2.25V3H6.75V2.25ZM14 16.5C14 16.775 13.775 17 13.5 17H4.5C4.225 17 4 16.775 4 16.5V4.5C4 4.225 4.225 4 4.5 4H13.5C13.775 4 14 4.225 14 4.5V16.5Z"
                          fill=""
                        />
                        <path
                          d="M9 14.25C9.41406 14.25 9.75 13.9141 9.75 13.5V8.25C9.75 7.83594 9.41406 7.5 9 7.5C8.58594 7.5 8.25 7.83594 8.25 8.25V13.5C8.25 13.9141 8.58594 14.25 9 14.25Z"
                          fill=""
                        />
                        <path
                          d="M6 14.25C6.41406 14.25 6.75 13.9141 6.75 13.5V8.25C6.75 7.83594 6.41406 7.5 6 7.5C5.58594 7.5 5.25 7.83594 5.25 8.25V13.5C5.25 13.9141 5.58594 14.25 6 14.25Z"
                          fill=""
                        />
                        <path
                          d="M12 14.25C12.4141 14.25 12.75 13.9141 12.75 13.5V8.25C12.75 7.83594 12.4141 7.5 12 7.5C11.5859 7.5 11.25 7.83594 11.25 8.25V13.5C11.25 13.9141 11.5859 14.25 12 14.25Z"
                          fill=""
                        />
                      </svg>
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default JoinRequestTable;
