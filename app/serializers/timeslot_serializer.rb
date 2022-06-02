class TimeslotSerializer < ActiveModel::Serializer
  attributes :id, :start_time, :time_value
end
