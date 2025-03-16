import React from 'react'
import { Switch } from "@/components/ui/switch"; // ✅ Import Switch from ShadCN
import { Bell, Lock, Moon, User, Settings, Sun } from "lucide-react";
export default function Setting() {
    return (
        <div className='pt-28 min-h-screen'>
            <div className="max-w-3xl mx-auto p-6">
                <h2 className="text-2xl font-bold mb-6">⚙️ Settings</h2>

                {/* Profile Section */}
                <div className="bg-white p-5 rounded-lg shadow-md mb-6">
                    <h3 className="text-lg font-semibold flex items-center gap-2">
                        <User className="h-5 w-5 text-gray-600" /> Profile
                    </h3>
                    <div className="flex items-center mt-4">
                        <img
                            src="https://randomuser.me/api/portraits/men/40.jpg"
                            alt="User Avatar"
                            className="w-12 h-12 rounded-full border border-gray-300"
                        />
                        <div className="ml-4">
                            <p className="font-semibold">John Doe</p>
                            <p className="text-gray-500 text-sm">john.doe@example.com</p>
                        </div>
                    </div>
                </div>

                {/* Preferences */}
                <div className="bg-white p-5 rounded-lg shadow-md mb-6">
                    <h3 className="text-lg font-semibold flex items-center gap-2">
                        <Settings className="h-5 w-5 text-gray-600" /> Preferences
                    </h3>
                    <div className="mt-4">
                        <label className="text-sm font-medium">Unit System</label>
                        <select className="w-full mt-2 p-2 border rounded-lg text-sm font-light">
                            <option value="metric">Metric (kg, km)</option>
                            <option value="imperial">Imperial (lbs, miles)</option>
                        </select>
                    </div>
                </div>

                {/* Notifications */}
                <div className="bg-white p-5 rounded-lg shadow-md mb-6">
        <h3 className="text-lg font-semibold flex items-center gap-2">
          <Bell className="h-5 w-5 text-gray-600" /> Notifications
        </h3>
        <div className="mt-4 flex items-center justify-between">
          <p className="text-sm">Enable Workout Reminders</p>
          <Switch  />
        </div>
        <div className="mt-3 flex items-center justify-between">
          <p className="text-sm">New Friend Requests</p>
          <Switch defaultChecked />
        </div>
      </div>

      {/* Privacy */}
      <div className="bg-white p-5 rounded-lg shadow-md mb-6">
        <h3 className="text-lg font-semibold flex items-center gap-2">
          <Lock className="h-5 w-5 text-gray-600" /> Privacy
        </h3>
        <div className="mt-4 flex items-center justify-between">
          <p className="text-sm">Make Profile Private</p>
          <Switch />
        </div>
        <div className="mt-3 flex items-center justify-between">
          <p className="text-sm">Allow Friend Requests</p>
          <Switch defaultChecked />
        </div>
      </div>

      {/* App Settings */}
      <div className="bg-white p-5 rounded-lg shadow-md">
        <h3 className="text-lg font-semibold flex items-center gap-2">
          <Moon className="h-5 w-5 text-gray-600" /> App Settings
        </h3>
        <div className="mt-4 flex items-center justify-between">
          <p className="text-sm">Enable Dark Mode</p>
          <Switch />
        </div>
        <div className="mt-3 flex items-center justify-between">
          <p className="text-sm">Show Calories in Sidebar</p>
          <Switch defaultChecked />
        </div>
      </div>
            </div>
        </div>
    )
}
