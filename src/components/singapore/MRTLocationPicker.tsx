'use client';

import { useState } from 'react';
import { MapPinIcon, TrainFrontIcon } from 'lucide-react';

interface MRTStation {
  name: string;
  code: string;
  line: string[];
  popular: boolean;
  safetyRating: number;
  facilities: string[];
}

const mrtStations: MRTStation[] = [
  {
    name: 'Orchard',
    code: 'NS22',
    line: ['North South Line'],
    popular: true,
    safetyRating: 5,
    facilities: ['ION Orchard', 'Takashimaya', 'Plaza Singapura', 'Food Courts']
  },
  {
    name: 'City Hall',
    code: 'NS25/EW13',
    line: ['North South Line', 'East West Line'],
    popular: true,
    safetyRating: 5,
    facilities: ['Raffles City', 'CityLink Mall', 'The Cathay']
  },
  {
    name: 'Bugis',
    code: 'EW12',
    line: ['East West Line'],
    popular: true,
    safetyRating: 5,
    facilities: ['Bugis Junction', 'Bugis Street', 'Food Courts']
  },
  {
    name: 'Marina Bay',
    code: 'NS27/CE2',
    line: ['North South Line', 'Circle Line'],
    popular: true,
    safetyRating: 5,
    facilities: ['Marina Bay Sands', 'The Shoppes', 'Gardens by the Bay']
  },
  {
    name: 'Tampines',
    code: 'EW2',
    line: ['East West Line'],
    popular: true,
    safetyRating: 4,
    facilities: ['Tampines Mall', 'Century Square', 'Food Courts']
  },
  {
    name: 'Jurong East',
    code: 'NS1/EW24',
    line: ['North South Line', 'East West Line'],
    popular: true,
    safetyRating: 4,
    facilities: ['JEM', 'Westgate', 'Jurong Point']
  },
  {
    name: 'Woodlands',
    code: 'NS9',
    line: ['North South Line'],
    popular: false,
    safetyRating: 4,
    facilities: ['Causeway Point', 'Marsiling Mall']
  },
  {
    name: 'Ang Mo Kio',
    code: 'NS16',
    line: ['North South Line'],
    popular: false,
    safetyRating: 4,
    facilities: ['AMK Hub', 'Food Courts']
  }
];

interface MRTLocationPickerProps {
  onLocationSelect: (station: MRTStation) => void;
  selectedStation?: MRTStation;
}

export function MRTLocationPicker({ onLocationSelect, selectedStation }: MRTLocationPickerProps) {
  const [searchTerm, setSearchTerm] = useState('');
  const [showAll, setShowAll] = useState(false);

  const filteredStations = mrtStations.filter(station => {
    const matchesSearch = station.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         station.code.toLowerCase().includes(searchTerm.toLowerCase());
    const shouldShow = showAll || station.popular;
    return matchesSearch && shouldShow;
  });

  const getLineColor = (line: string) => {
    const colors: { [key: string]: string } = {
      'North South Line': 'bg-red-500',
      'East West Line': 'bg-green-500',
      'Circle Line': 'bg-yellow-500',
      'Downtown Line': 'bg-blue-500',
      'Thomson-East Coast Line': 'bg-brown-500'
    };
    return colors[line] || 'bg-gray-500';
  };

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, i) => (
      <span key={i} className={`text-sm ${i < rating ? 'text-yellow-400' : 'text-gray-300'}`}>
        ★
      </span>
    ));
  };

  return (
    <div className="bg-white rounded-lg shadow-sm">
      <div className="p-4 border-b border-gray-200">
        <h3 className="text-lg font-semibold text-gray-900 mb-4">
          Choose MRT Meetup Location
        </h3>
        
        {/* Search Bar */}
        <div className="relative mb-4">
          <MapPinIcon className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
          <input
            type="text"
            placeholder="Search MRT stations..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-red-500"
          />
        </div>

        {/* Show All Toggle */}
        <button
          onClick={() => setShowAll(!showAll)}
          className="text-sm text-red-600 hover:text-red-500"
        >
          {showAll ? 'Show popular only' : 'Show all stations'}
        </button>
      </div>

      {/* Station List */}
      <div className="max-h-96 overflow-y-auto">
        {filteredStations.map((station) => (
          <button
            key={station.code}
            onClick={() => onLocationSelect(station)}
            className={`w-full p-4 text-left hover:bg-gray-50 border-b border-gray-100 transition-colors ${
              selectedStation?.code === station.code ? 'bg-red-50 border-red-200' : ''
            }`}
          >
            <div className="flex items-center justify-between mb-2">
              <div className="flex items-center">
                <TrainFrontIcon className="h-5 w-5 text-gray-600 mr-3" />
                <h4 className="font-semibold text-gray-900">{station.name}</h4>
                {station.popular && (
                  <span className="ml-2 bg-red-100 text-red-800 text-xs px-2 py-1 rounded-full">
                    Popular
                  </span>
                )}
              </div>
              <div className="flex items-center">
                {renderStars(station.safetyRating)}
              </div>
            </div>

            <div className="flex items-center mb-2">
              <span className="text-sm text-gray-600 mr-3">{station.code}</span>
              <div className="flex space-x-1">
                {station.line.map((line) => (
                  <span
                    key={line}
                    className={`w-3 h-3 rounded-full ${getLineColor(line)}`}
                    title={line}
                  />
                ))}
              </div>
            </div>

            <div className="text-sm text-gray-600">
              <strong>Nearby:</strong> {station.facilities.slice(0, 2).join(', ')}
              {station.facilities.length > 2 && ` +${station.facilities.length - 2} more`}
            </div>
          </button>
        ))}
      </div>

      {/* Safety Tips */}
      <div className="p-4 bg-blue-50 border-t border-gray-200">
        <h5 className="font-medium text-blue-900 mb-2">💡 Safe Meetup Tips</h5>
        <ul className="text-sm text-blue-800 space-y-1">
          <li>• Meet in well-lit, public areas</li>
          <li>• Choose locations with CCTV coverage</li>
          <li>• Inform someone about your meetup</li>
          <li>• Verify cards before payment</li>
        </ul>
      </div>

      {selectedStation && (
        <div className="p-4 bg-green-50 border-t border-gray-200">
          <div className="flex items-center text-green-800">
            <MapPinIcon className="h-5 w-5 mr-2" />
            <span className="font-medium">
              Selected: {selectedStation.name} MRT ({selectedStation.code})
            </span>
          </div>
        </div>
      )}
    </div>
  );
}